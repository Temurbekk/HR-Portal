package net.guides.springboot2.springboot2jpacrudexample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.guides.springboot2.springboot2jpacrudexample.exception.ResourceNotFoundException;
import net.guides.springboot2.springboot2jpacrudexample.model.Student;
import net.guides.springboot2.springboot2jpacrudexample.repository.StudentRepository;

@RestController
@RequestMapping("/api")
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;

	@GetMapping("/students")
	public List<Student> getAllEmployees() {
		return studentRepository.findAll();
	}

	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getEmployeeById(@PathVariable(value = "id") UUID employeeId)
			throws ResourceNotFoundException {
		Student employee = studentRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found for this id :: " + employeeId));
		return ResponseEntity.ok().body(employee);
	}

	@PostMapping("/students")
	public Student createEmployee(@Valid @RequestBody Student employee) {
		return studentRepository.save(employee);
	}

	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateEmployee(@PathVariable(value = "id") UUID employeeId,
			@Valid @RequestBody Student studentDetails) throws ResourceNotFoundException {
		Student student = studentRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found for this id :: " + employeeId));

		
		student.setLastName(studentDetails.getLastName());
		student.setFirstName(studentDetails.getFirstName());
		student.setAddress(studentDetails.getAddress());
		student.setGpa(studentDetails.getGpa());
		student.setGraduation_date(studentDetails.getGraduation_date());
		student.setYear(studentDetails.getYear());
		final Student updatedEmployee = studentRepository.save(student);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/students/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") UUID employeeId)
			throws ResourceNotFoundException {
		Student employee = studentRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found for this id :: " + employeeId));

		studentRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
