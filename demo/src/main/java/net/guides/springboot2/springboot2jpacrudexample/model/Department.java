package net.guides.springboot2.springboot2jpacrudexample.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="department")
public class Department {

    private long deptNo; 
    private String deptName; 
    private String location;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getDeptNo() {
        return deptNo;
    }

    public void setDeptNo(long deptNo) {
        this.deptNo = deptNo;
    }

    @Column(name="deptname",nullable = false)
    public String getDeptName() {
        return deptName;
    }

    
    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    @Column(name="deptloc",nullable = false)
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    
    
}