import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "1m", target: 500 },
    { duration: "4m", target: 500 },
    { duration: "1m", target: 1000 },
    { duration: "4m", target: 1000 },
    { duration: "1m", target: 1500 },
    { duration: "4m", target: 1500 },
    { duration: "1m", target: 2000 },
    { duration: "4m", target: 2000 },
    { duration: "1m", target: 2500 },
    { duration: "4m", target: 2500 },
    { duration: "1m", target: 0 },
  ],

  thresholds: {
    http_req_duration: ["p(95)<300"],
  },
};

const BASE_URL = "https://thingdong.com";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5bWowNjA1IiwiQXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTcwMDExODM0OX0.SVDDEHrBeIkRzwXCcd_a9hnTiIBP5a9f1D7_C5kglCw";
const USER_ID = 6;

const requestHeaders = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

// 방조회 /api/rooom
function getRoom() {
  const url = `${BASE_URL}/api/room?userId=${USER_ID}`;
  const params = {
    headers: requestHeaders,
  };

  let pathRes = http.get(url, params);
  check(pathRes, {
    // 결과를 체크
    "success to get path": (res) => res.status === 200, //응답 상태코드가 200이면 성공
  });
  sleep(1);
}

// 띵구 목록 조회 /api/thinggus
function getThinggus() {
  const url = `${BASE_URL}/api/thinggus`;
  const params = {
    headers: requestHeaders,
  };

  let pathRes = http.get(url, params);
  check(pathRes, {
    // 결과를 체크
    "success to get path": (res) => res.status === 200, //응답 상태코드가 200이면 성공
  });
  sleep(1);
}
// 방명록 조회 /api/guest-books
function getGuestBook() {
  const url = `${BASE_URL}/api/guest-books?userId=${USER_ID}`;
  const params = {
    headers: requestHeaders,
  };

  let pathRes = http.get(url, params);
  check(pathRes, {
    // 결과를 체크
    "success to get path": (res) => res.status === 200, //응답 상태코드가 200이면 성공
  });
  sleep(1);
}
// 룸 인벤토리에서 오브제 조회 /api/objects/roomInventory
function getObjectFromRoomInventory() {
  const url = `${BASE_URL}/api/objects/roomInventory`;
  const params = {
    headers: requestHeaders,
  };

  let pathRes = http.get(url, params);
  check(pathRes, {
    // 결과를 체크
    "success to get path": (res) => res.status === 200, //응답 상태코드가 200이면 성공
  });
  sleep(1);
}
// 인벤토리에서 오브제 조회 /api/objects/inventory
function getObjectFromInventory() {
  const url = `${BASE_URL}/api/objects/inventory`;
  const params = {
    headers: requestHeaders,
  };

  let pathRes = http.get(url, params);
  check(pathRes, {
    // 결과를 체크
    "success to get path": (res) => res.status === 200, //응답 상태코드가 200이면 성공
  });
  sleep(1);
}

export default function () {
  getObjectFromRoomInventory();
  getObjectFromInventory();
  getGuestBook();
  getThinggus();
  getRoom();
}
