package com.copus.v1;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@RequiredArgsConstructor
public class TestEntity {
    @Id
    @GeneratedValue
    @Column(name = "test_id")
    private Long id;

    private String name;
}
