<!-- 顶部导航栏 -->
<template>
	<view class="u-demo-block">
		<view class="u-demo-block__content">
			<u-tabs :list="list" lineWidth="30" @click=click lineColor="#f56c6c" :activeStyle="{
					color: '#303133',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}" :inactiveStyle="{
					color: '#606266',
					transform: 'scale(1)'
				}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
			</u-tabs>
		</view>
	</view>
</template>

<script>
	const lineBg =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
	export default {
		name: 'TabTop',
		mixins: [uni.$u.mixin],
		data() {
			return {
				lineBg,
				list: [{
					name: '首页',
					part:1,
					badge: {
						isDot: false,

					}
				}, {
					name: '恋爱交友',
					part:2,
				}, {
					name: '求助答疑',
					part:3,
				}, {
					name: '求职招聘',
					part:4,
				}, {
					name: '瓜田趣事',
					part:5,
				}],
			}
		},
		onLoad() {

		},
		methods: {
			click(item) {
				console.log('分区:', item.part,item.name);
			}
		}
	}
</script>

<style lang="scss">
	.u-demo-block {
		padding-top: 5px;

	}

	.u-demo-block__content {}
</style>
