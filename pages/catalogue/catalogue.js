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
		showModal:false,
		currentFood:{}
  },

  onLoad: function (options) {
		this.getGoodList()
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

	tabGo (options) {
		// this.setData({
		// 	showModal:true,
		// 	currentFood: options.detail.currentFood
		// })
		// console.log(options.detail.currentFood)
		this.previewImage();
	},

	previewImage(options) {
		// const src = options.currentTarget.dataset.src;
		// console.log(src)
		wx.previewImage({
			urls: ["http://pdi0jzs1t.bkt.clouddn.com/admire.jpeg"],
		})
	},
})