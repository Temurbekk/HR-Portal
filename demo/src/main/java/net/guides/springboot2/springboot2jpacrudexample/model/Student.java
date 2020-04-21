package net.guides.springboot2.springboot2jpacrudexample.model;

import java.sql.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "students")
public class Student {

	private UUID id;
	private String firstName;
	private String lastName;
	private String address;
	private double gpa;
	private String year;
	private Date graduation_date;
	private double tuition_due; 

	public Student() {

	}

	public Student(String firstName, String lastName, String emailId, String address, double gpa, String year,
			Date graduation_date, double salary, String phone_no) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.gpa = gpa;
		this.year = year;
		this.graduation_date = graduation_date;

	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	@Column(name = "first_name", nullable = false)
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "last_name", nullable = false)
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Column(name = "address", nullable = false)
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "gpa", nullable = false)
	public double getGpa() {
		return gpa;
	}

	public void setGpa(double gpa) {
		this.gpa = gpa;
	}

	@Column(name = "year", nullable = false)
	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	@Column(name = "graduation_date")
	public Date getGraduation_date() {
		return graduation_date;
	}

	public void setGraduation_date(Date graduation_date) {
		this.graduation_date = graduation_date;
	}

	@Column(name="tuition_due")
	public double getTuition_due() {
		return tuition_due;
	}

	public void setTuition_due(double tuition_due) {
		this.tuition_due = tuition_due;
	}


	@Override
	public String toString() {
		return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
				+ ", gpa=" + gpa + ", year=" + year + ", graduation_date=" + graduation_date + "]";
	}


}
