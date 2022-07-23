<!-- 弃用 -->

<template>
	<view class="postArea">
		<!-- 头像&用户名 -->
		<view class="post-head">
			<view class="headImg-area">	
				<view class="head-image">
					<img src="../../../static/logo.png" 
					style="width: 30px;height: 30px;border-radius: 15px;"/>
				</view>
			</view>
			<view class="userTitle-area">
				<p class = "user-title">用户名</p>
			</view>
		</view>
		
		<!-- 帖子标题与内容 -->
		<view class="post-content">
			<view v-for="(l,index) in list" :key="index">
				<b>{{l.title}}</b><hr><br>
				{{l.content}}<br><br>
				{{l.photo}}
			</view>
		</view>
		<view class="post-info">
			<view class="part-name">
			<p>#分区</p>
			</view>
			<view class="comment-info"><view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view></view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'PostArea',
		data(){
			return{
				list:[{
					title:'神秘男子半夜偷狗',
					content:'撒打算发大水发打发大水发大水。阿大风大水范德萨,卢本伟牛逼，卢本伟没有开挂！少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所',
					photo:'图片区'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 帖子样式 */
	.postArea{
		width: 95%;
		margin: auto;
		margin-bottom: 5px;
		height: 200px;
		border: 1px solid gainsboro;
		border-radius: 10px;
		padding:5px;
		position: relative;
		overflow: hidden;
	}
	
	/* 头像区域 */
	.headImg-area{
		width: 30px;
		height: 30px;
		float: left;
		margin-right: 10px;
	}
	.head-image{
		border-radius:15px ;
		width: 30px;
		height: 30px;
		border:1px solid;
	}
	/* 昵称区域 */
	.post-head{
		height: 30px;
	}
	.userTitle-area{
		height: 30px;
		border: 1px sloid blue;
		vertical-align: middle;
	}
	.user-title{
		line-height: 30px;
		font-size: 18px;
		font-weight: bold;
		font-style: inherit;
		color:darkseagreen;
	}
	
	/* 内容区域 */
	.post-content{
		margin-top:10px;
		overflow: hidden;
	}
</style>