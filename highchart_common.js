//전역옵션
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  },
  chart: {
    backgroundColor: 'transparent', // 차트 background 컬러 
    style: {
      fontFamily: 'pretendard' // 차트 전체 font family 적용
    }
  },
  navigation: false, // 차트 메뉴 버튼 유/무 (필수)
  credits: {
    enabled: false
  }, // 하단 하이차트 주소 숨김 (필수)
  title: null, // 대제목, 없을 경우 -> title: undefined or null
  subtitle: null,
  xAxis: {
    labels: {
      style: { // label 스타일 설정
        color: '#000',
        fontSize: '14px',
        //transform: 'translate(0, 0)', // x축 이름이 길어 rotate될때 강제로 rotate 막기
      },
    },
    lineColor: '#d7d7d7', // x축 가장 하단 line color 지정
  },
  yAxis: {
    title: {
      text: '',
      style: { // label 스타일 설정
        color: '#000',
        fontSize: '13px',
      },
    },
    labels: {
      format: '{value:,.0f}', // label format 설정. value에 1000 단위로 , 추가할 시 {value:,.0f}로 쓰기
      style: { // label 스타일 설정
        color: '#000',
        fontSize: '13px',
      },
    },
    gridLineColor: '#ededed', // y축 그리드 color 지정
  },
  legend: {
    useHTML: true, // html 사용 여부 (단, 적용시 tooltip이 legend과 겹치는 경우 legend 아래로 가려짐)
    itemStyle: { // legend 아이템 스타일
      fontWeight: '500',
      fontSize: '14px',
      color: '#000',
      verticalAlign: 'top',
    },
    itemHoverStyle: { // legend 아이템 hover 스타일
      color: '#000'
    },
  },
  tooltip: {
    shared: true, // series 각 툴팁을 한 개의 툴팁으로
    useHTML: true, // html 사용 여부
    headerFormat: '<div><b style="color:#000; margin-bottom:2px; display:block; font-weight:600;">{point.key}</b></div>',
    style: { // tooltip 스타일 지정
      fontSize: '14px',
    },
    backgroundColor: 'rgba(255,255,255,1)'
  },
});