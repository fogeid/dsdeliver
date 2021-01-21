package io.diegobatista.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.diegobatista.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
