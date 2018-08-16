// pages/catalogue/catalogue.js
import { drinkData, snowData, snacksData} from '../../utils/data.js';

Page({
  data: {
		classifyList:[
			{ value: 1, name: '饮料' },
			{ value: 2, name: '雪糕' },
			{ value: 3, name: '零食' },
		],
		currentClassify:1,
		goodsList: [],
		page:1,
  },

  onLoad: function (options) {
		this.getGoodList()
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

	changeTab(event){
		const currentClassify = event.detail.activeValue;
		this.setData({
			currentClassify
		},()=>{
			this.getGoodList()
		})
	},

	getGoodList(){
		let goodsList = [];
		switch (this.data.currentClassify) {
			case 1:
				goodsList = drinkData;
				break;
			case 2:
				goodsList = snowData;
				break;
			case 3:
				goodsList = snacksData;
				break;
		}
		this.setData({
			goodsList
		})
	},

  onPullDownRefresh: function () {
		
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})