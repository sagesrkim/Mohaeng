/** @type {import('next').NextConfig} */

const nextConfig = {
  fallback: true,
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: [
      "tong.visitkorea.or.kr",
      "cdn.visitkorea.or.kr",
      "k.kakaocdn.net",
      "mohaeng.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  pageExtensions: ["jsx", "js", "ts", "tsx", "json"],
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      // {
      //   source: "/:path*",
      //   destination: "http://3.24.141.151:8080/:path*",
      // },
      // 코스 상세를 보려면 위 코드는 주석 처리하고 아래 코드는 주석을 풀어주세요.
      // 다른 url 경로 추가
      // {
      //   source: "/api/course/:path*",
      //   destination: "http://3.24.141.151/api/course/:path*",
      // },
      // {
      //   source: "/api/myPage/course/bookMark",
      //   destination: "http://3.24.141.151/api/myPage/course/bookMark",
      // },
      // {
      //   source: "/api/myPage/myReview",
      //   destination: "http://3.24.141.151/api/myPage/myReview",
      // },
      // {
      //   source: "/api/myPage/course",
      //   destination: "http://3.24.141.151/api/myPage/course",
      // },
      // {
      //   source: "/login/:path*",
      //   destination: "http://3.24.141.151/login/:path*",
      // },
      // {
      //   source: "/loginInfo/:path*",
      //   destination: "http://3.24.141.151/loginInfo/:path*",
      // },
      // {
      //   source: "/loginInfo",
      //   destination: "http://3.24.141.151/loginInfo",
      // },
      // {
      //   source: "/oauth/token/:path*",
      //   destination: "http://3.24.141.151/oauth/token/:path*",
      // },
      // {
      //   source: "/api/places/:path*",
      //   destination: "http://3.24.141.151/api/places/:path*",
      // },
      // {
      //   source: "/api/place/:path*",
      //   destination: "http://3.24.141.151/api/place/:path*",
      // },
      // {
      //   source: "/api/place/overview/:path*",
      //   destination: "http://3.24.141.151/api/place/overview/:path*",
      // },
      // {
      //   source: "/api/review/:path*",
      //   destination: "http://3.24.141.151/api/review/:path*",
      // },
      // {
      //   source: "/api/review/detail/:path*",
      //   destination: "http://3.24.141.151/api/review/detail/:path*",
      // },
      // {
      //   source: "/api/review/:placeId/date",
      //   destination: "http://3.24.141.151/api/review/:placeId/date",
      // },
      // {
      //   source: "/api/review/:placeId/rating",
      //   destination: "http://3.24.141.151/api/review/:placeId/rating",
      // },
      // {
      //   source: "/api/myPage/place/bookMark",
      //   destination: "http://3.24.141.151/api/myPage/place/bookMark",
      // },
      // {
      //   source: "/api/myPage/:path*",
      //   destination: "http://3.24.141.151/api/myPage/:path*",
      // },
      // {
      //   source: "/api/place/main/:path",
      //   destination: "http://3.24.141.151/api/place/main/:path",
      // },
      {
        source: "/api/course/:path*",
        destination: "http://localhost:8080/api/course/:path*",
      },
      {
        source: "/api/myPage/course/bookMark",
        destination: "http://localhost:8080/api/myPage/course/bookMark",
      },
      {
        source: "/api/myPage/myReview",
        destination: "http://localhost:8080/api/myPage/myReview",
      },
      {
        source: "/api/myPage/course",
        destination: "http://localhost:8080/api/myPage/course",
      },
      {
        source: "/login/:path*",
        destination: "http://localhost:8080/login/:path*",
      },
      {
        source: "/loginInfo/:path*",
        destination: "http://localhost:8080/loginInfo/:path*",
      },
      {
        source: "/loginInfo",
        destination: "http://localhost:8080/loginInfo",
      },
      {
        source: "/oauth/token/:path*",
        destination: "http://localhost:8080/oauth/token/:path*",
      },
      {
        source: "/api/places/:path*",
        destination: "http://localhost:8080/api/places/:path*",
      },
      {
        source: "/api/place/:path*",
        destination: "http://localhost:8080/api/place/:path*",
      },
      {
        source: "/api/place/overview/:path*",
        destination: "http://localhost:8080/api/place/overview/:path*",
      },
      {
        source: "/api/review/:path*",
        destination: "http://localhost:8080/api/review/:path*",
      },
      {
        source: "/api/review/detail/:path*",
        destination: "http://localhost:8080/api/review/detail/:path*",
      },
      {
        source: "/api/review/:placeId/date",
        destination: "http://localhost:8080/api/review/:placeId/date",
      },
      {
        source: "/api/review/:placeId/rating",
        destination: "http://localhost:8080/api/review/:placeId/rating",
      },
      {
        source: "/api/myPage/place/bookMark",
        destination: "http://localhost:8080/api/myPage/place/bookMark",
      },
      {
        source: "/api/myPage/:path*",
        destination: "http://localhost:8080/api/myPage/:path*",
      },
      {
        source: "/api/place/main/:path",
        destination: "http://localhost:8080/api/place/main/:path",
      },
    ];
  },
};

module.exports = nextConfig;
