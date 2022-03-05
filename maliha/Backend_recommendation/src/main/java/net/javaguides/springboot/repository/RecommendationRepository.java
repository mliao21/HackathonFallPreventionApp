package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Recommendation;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long>{

}
