//package com.mohaeng.backend.place.dto.request;
//
//import com.mohaeng.backend.place.entity.Category;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotNull;
//import lombok.Builder;
//import lombok.Getter;
//
//@Getter
//public class AddPlaceCreate {
//
//    @NotNull
//    private String username;
//
//    @NotBlank(message = "여행지 이름을 입력해주세요.")
//    private String name;
//
//    @NotBlank(message = "주소를 입력해주세요.")
//    private String address;
//
//    @NotBlank(message = "카테고리 입력해주세요.")
//    private String category;
//
////    @NotBlank(message = "이용시간을 입력해주세요.")
//    private String availableTime;
//
////    @NotBlank(message = "이미지를 첨부해주세요.")
////    private String image;
//
////    @NotBlank(message = "주소를 입력해주세요.")
//    private String menu;
//
//    @NotBlank(message = "이메일을 입력해주세요.")
//    private String email;
//
//    private String latitude;
//
//    private String longitude;
//
//    private boolean registered; // 등록 요청 여부
//
//    @Builder
//    public AddPlaceCreate(String username, String name, String address,
//                          Category category, String availableTime, String menu,
//                          String email, String latitude, String longitude,
//                            Boolean registered) {
//        this.username = username;
//        this.name = name;
//        this.address = address;
//        this.category = String.valueOf(category);
//        this.availableTime = availableTime;
//        this.menu = menu;
//        this.email = email;
//        this.latitude = latitude;
//        this.longitude = longitude;
//        this.registered = registered;
//    }
//}
