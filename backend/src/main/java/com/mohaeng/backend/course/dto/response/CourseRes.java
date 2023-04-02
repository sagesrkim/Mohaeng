package com.mohaeng.backend.course.dto.response;

import com.mohaeng.backend.course.domain.Course;
import com.mohaeng.backend.course.domain.CourseStatus;
import com.mohaeng.backend.course.dto.CourseInPlaceDto;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CourseRes {
    private Long courseId;
    private String title;
    private String nickname;
    private Integer likeCount;
    private String courseDays;
    private String region;
    private Boolean isPublished;
    private LocalDateTime createdDate;
    private String startDate;
    private String endDate;
    private String content;
    private List<CourseInPlaceDto> places;

    @Builder
    private CourseRes(Long courseId, String title, String nickname, Integer likeCount, String courseDays, String region, Boolean isPublished, LocalDateTime createdDate, String startDate,
                      String endDate, String content, List<CourseInPlaceDto> places) {
        this.courseId = courseId;
        this.title = title;
        this.nickname = nickname;
        this.likeCount = likeCount;
        this.courseDays = courseDays;
        this.region = region;
        this.isPublished = isPublished;
        this.createdDate = createdDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.content = content;
        this.places = places;
    }

    public static CourseRes from(Course course, List<CourseInPlaceDto> courseInPlaceDtoList){
        return CourseRes.builder()
                .courseId(course.getId())
                .title(course.getTitle())
                .nickname(course.getMember().getNickName())
                .likeCount(course.getLikeCount())
                .courseDays(course.getCourseDays())
                .region(course.getRegion())
                .isPublished(changeStatusToBoolean(course.getCourseStatus()))
                .createdDate(course.getCreatedDate())
                .startDate(dateToStr(course.getStartDate()))
                .endDate(dateToStr(course.getEndDate()))
                .content(course.getContent())
                .places(courseInPlaceDtoList)
                .build();
    }

    private static String dateToStr(LocalDateTime date){
        return date.format(DateTimeFormatter.ofPattern("YYYY-MM-dd"));
    }

    private static Boolean changeStatusToBoolean(CourseStatus status){
        return status.equals(CourseStatus.PUBLIC) ? true : false;
    }
}
