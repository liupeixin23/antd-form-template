export const cascaderOption = () => {
  return [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致'
      }, {
        value: 'fankui',
        label: '反馈'
      }, {
        value: 'xiaolv',
        label: '效率'
      }, {
        value: 'kekong',
        label: '可控'
      }]
    }, {
      value: 'daohang',
      label: '导航',
      children: [{
        value: 'cexiangdaohang',
        label: '侧向导航'
      }, {
        value: 'dingbudaohang',
        label: '顶部导航'
      }]
    }]
  }, {
    value: 'zhaopin',
    label: '招聘',
    children: [{
      value: 'ceshi',
      label: '测试'
    }, {
      value: 'cangshu',
      label: '参数'
    }]
  }]
}

export const selectOption = () => {
  return [
    {
      label: '全部',
      value: 0,
    },
    {
      label: '工单',
      value: 1
    },
    {
      label: '呼叫',
      value: 2
    },
    {
      label: '在线',
      value: 3
    }
  ]
}