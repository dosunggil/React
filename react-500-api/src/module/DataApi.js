/*
    fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "FrAKvbB7WOCD5bV5A52RqXvJjxwLr8aAp7x8C6kwodhQG5LZ2k0eN%2B32ZFCU0HszcZqqt8ifdudNNI%2BodwqmTg%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
