package net.guides.springboot2.springboot2jpacrudexample.model;

import net.guides.springboot2.springboot2jpacrudexample.model.Department;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "employees")
public class Employee {

	private UUID id;
	private String firstName;
	private String lastName;
	private String emailId;
	private String address;
	private String phone_no;
	private double salary;

	public Employee() {

	}

	public Employee(String firstName, String lastName, String emailId, String Address, double salary, String phone_no) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.address = Address;
		this.salary = salary;
		this.phone_no = phone_no;

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

	@Column(name = "email_address", nullable = false)
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Column(name = "address", nullable = false)
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "salary", nullable = false)
	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	@Column(name = "phone_no", nullable = false, length = 10)
	public String getPhone_no() {
		return phone_no;
	}

	
	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ "]";
	}



}
