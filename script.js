/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
조건 1. 플래너를 열면 맨 위에 날짜가 나와야 함 // 클리어

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
조건 2. 스크롤 내리면 타임 블록이 시간대 별로 나옴

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
조건 3. 과거, 오늘, 미래는 다른 색이 칠해져 있어ㅑㅇ 함

WHEN I click into a timeblock
THEN I can enter an event
조건 4. 타임블록을 누르면 이벤트 추가 가능

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
조건 5. 저장 버튼을 누르면 로컬 저장소에 기록됨

WHEN I refresh the page
THEN the saved events persist
조건 6. 새로고침 하면 저장된 이벤트는 계속 있어야 함 */

var rightNow = moment().format("ddd, MMM DD, YYYY");
$("#currentDay").text(rightNow);
