/**
 * Created by vigro on 2018/6/13.
 */
var myChart = echarts.init(document.getElementById('chart1'));
myChart.title = '嵌套环形图';

option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    // data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    data: ['医疗', '金融', '出行', '政务', '物流', '电商', '城市规划', '农业', '环境', '其他']
  },
  series: [
    {
      name: '大数据挖掘价值',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: '医疗', selected: true },
        { value: 679, name: '金融' },
        { value: 1548, name: '出行' }
      ]
    },
    {
      name: '大数据挖掘价值',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
            // abg: {
            //     backgroundColor: '#333',
            //     width: '100%',
            //     align: 'right',
            //     height: 22,
            //     borderRadius: [4, 4, 0, 0]
            // },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        }
      },
      data: [
        { value: 335, name: '医疗' },
        { value: 310, name: '政务' },
        { value: 234, name: '物流' },
        { value: 135, name: '电商' },
        { value: 1048, name: '城市规划' },
        { value: 251, name: '农业' },
        { value: 147, name: '环境' },
        { value: 102, name: '其他' }
      ]
    }
  ]
}
myChart.setOption(option);

