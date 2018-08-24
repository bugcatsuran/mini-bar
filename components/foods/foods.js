// components/goods/goods.js
Component({

	externalClasses: ['goods_shell'],

  properties: {
		list: {
			type: Array,
			value: [],
		}
  },

  data: {

  },

  methods: {
		tabGo(options){
			const currentFood = options.currentTarget.dataset.currentfood;
			this.triggerEvent('tabGo', {currentFood});
		}
  }
})
