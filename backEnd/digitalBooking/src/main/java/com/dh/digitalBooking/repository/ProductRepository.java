package com.dh.digitalBooking.repository;


import com.dh.digitalBooking.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p " +
           "JOIN p.accommodation a " +
           "JOIN a.city c " +
           "WHERE c.name = :cityName")
    List<Product>findProductsByCityName(@Param("cityName") String cityName);

    @Query("SELECT p FROM Product p " +
           "JOIN p.accommodation a " +
           "JOIN a.category c " +
           "WHERE c.name = :categoryName")
    List<Product>findProductsByCategoryName(@Param("categoryName") String categoryName);

    @Query("SELECT p FROM Product p " +
            "JOIN p.accommodation a " +
            "JOIN a.city c " +
            "WHERE c.name = :cityName " +
            "AND NOT EXISTS (" +
            "    SELECT r FROM Reservation r " +
            "    WHERE r.product = p " +
            "    AND ((r.checkIn <= :startDate AND r.checkOut >= :startDate) " +
            "         OR (r.checkIn <= :endDate AND r.checkOut >= :endDate) " +
            "         OR (r.checkIn >= :startDate AND r.checkOut <= :endDate)))")
    List<Product> findProductByCityAndDates(@Param("cityName") String cityName,
                                            @Param("startDate") Timestamp startDate,
                                            @Param("endDate") Timestamp endDate);

//    @Query("SELECT p FROM Reservation r " +
//            "RIGHT JOIN r.product p " +
//            "JOIN p.accommodation a " +
//            "JOIN a.city c " +
//            "WHERE c.name = :cityName " +
//            "AND (r.checkIn < ':startDate' or r.checkIn is null)" +
//            "AND (r.checkOut > ':endDate' or r.checkOut is null)" )
//    List<Product> findProductByCityAndDates(@Param("cityName") String cityName,
//                                            @Param("startDate") Timestamp startDate,
//                                            @Param("endDate") Timestamp endDate);

//    @Query("SELECT p FROM Product p " +
//            "LEFT JOIN p.reservation  r " +
//            "INNER JOIN p.accommodation a " +
//            "INNER JOIN h.city c " +
//            "WHERE c.name = :cityName " +
//            "AND (r.checkIn < ':startDate' or r.checkIn is null) " +
//            "AND (r.checkOut > ':endDate' or r.checkOut is null)")
//    List<Product> findProductByCityAndDates(@Param("cityName") String cityName,
//                                            @Param("startDate") Timestamp startDate,
//                                            @Param("endDate") Timestamp endDate);
}

