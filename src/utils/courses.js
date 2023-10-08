// 공통교양 과목 리스트
/*
id
신청구분(NULL, 장바구니, 수강신청)
과목번호-분반
과목명
담당교수
강의시간-시간표
학점
시간
강의시간-장소
*/

export const courseList = [
  {
    cid: 0,
    cType: 0,
    cNumber: "42183-01",
    cName: "글쓰기",
    professor: "박교수",
    cTable: "월1,2",
    cCredit: 2,
    cTime: 2,
    cPlace: "310관(310관) 622호 <강의실>",
  },
  {
    cid: 1,
    cType: 0,
    cNumber: "49949-01",
    cName: "창의와소통",
    professor: "김교수",
    cTable: "수3,4",
    cCredit: 2,
    cTime: 2,
    cPlace: "303관(법학관) 803호 <강의실>",
  },
  {
    cid: 2,
    cType: 0,
    cNumber: "52533-01",
    cName: "앙트프레너십시대의회계",
    professor: "최교수",
    cTable: "월3,4",
    cCredit: 2,
    cTime: 2,
    cPlace: "303관(법학관) 209호 <강의실>",
  },
  {
    cid: 3,
    cType: 0,
    cNumber: "50023-01",
    cName: "COMMUNICATION IN ENGLISH",
    professor: "이교수",
    cTable: "화(09:00~10:15) / 목(09:00~10:15)",
    cCredit: 2,
    cTime: 3,
    cPlace: "203관(서라벌홀) 803호 <영어전용강의실>",
  },
  {
    cid: 4,
    cType: 0,
    cNumber: "56424-01",
    cName: "AI시대문제해결을위한디자인사고",
    professor: "장교수",
    cTable: "금1,2",
    cCredit: 2,
    cTime: 2,
    cPlace: "310관(310관) 617호 <강의실>",
  },
  {
    cid: 5,
    cType: 0,
    cNumber: "56423-01",
    cName: "컴퓨팅적사고와인공지능리터러시",
    professor: "정교수",
    cTable: "목7,8",
    cCredit: 2,
    cTime: 2,
    cPlace: "303관(법학관) 701호 <컴퓨터실습실>",
  },
];
