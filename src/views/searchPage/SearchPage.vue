<template>
    <v-refresh :on-refresh="onRefresh">
        <v-reload
                :on-infinite-load="onInfiniteLoad"
                :parent-pull-up-state="infiniteLoadData.pullUpState"
        >
            <div class="searchPage">
                <header>
                    <img @click="goBack" src="../../../static/img/search/back.png" alt="">
                    <p class="headerTitle">影像报告查询</p>
                </header>
                <main>
                    <van-search v-model="value" placeholder="请输入搜索关键词" @click="serach" />
                    <ul style="touch-action: none">
                        <li v-for="(item, index) in cardList" :key="index.value" @click="details(item.reportId,item.syudyUid)">
                            <img  class="leftImg" :src="item.Img" alt="">
                            <div class="rightBox">
                                <p class="titleName">{{item.name}}</p>
                                <div class="rightDate">
                                    <img class="dateimg" :src="item.dateImg" alt="">
                                    <p class="date">
                                        {{item.date}}
                                    </p>
                                </div>
                                <div class="rightDate">
                                    <img class="dateimg" :src="item.equimentImg" alt="">
                                    <p class="date">
                                        {{item.equimentName}}
                                    </p>
                                </div>
                                <div class="rightDate">
                                    <img class="dateimg" :src="item.positionImg" alt="">
                                    <p class="date">
                                        {{item.positionName}}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </main>
            </div>
        </v-reload>
    </v-refresh>
</template>
<script>
    import DropDownRefresh from './components/DropDownRefresh'
    import PullUpReload from './components/PullUpReload'
    export default {

        data() {
            return{
                value: '',
                cardList: [],
                hosCode:'',
                // 上拉加载的设置
                infiniteLoadData: {
                    initialShowNum: 1, // 初始显示多少条
                    everyLoadingNum: 3, // 每次加载的个数
                    pullUpState: 2, // 子组件的pullUpState状态
                    pullUpList: [], // 上拉加载更多数据的数组
                    showPullUpListLength: this.initialShowNum // 上拉加载后所展示的个数
                }
            }
        },

       /* mounted () {
            this.getStartPullUpState()
            //this.getPullUpDefData()
        },
*/

        methods: {
            goBack() {
                this.$router.go(-1);
            },

            //搜索
            serach(){
                if(this.value==null || this.value==''){
                    return
                }
                this.$axios({
                    method:'get',
                    url:'/api/query',
                    params: {
                        'userName':this.value,
                        'hCode':this.hosCode
                    }
                }).then((res)=>{
                    console.log(res)
                    if(res.data.code='0'){
                        if(res.data.data.length==0){

                        }
                        this.cardList =[];
                        var result = res.data.data
                        for(var i=0;i<result.length;i++){
                            this.cardList.push({
                                Img: require('../../../static/img/search/Img1.jpg'),
                                name: result[i].hosName,
                                dateImg: require('../../../static/img/search/dateImg.png'),
                                date: result[i].studyDate,
                                equimentImg: require('../../../static/img/search/equimentImg.png'),
                                equimentName:result[i].checkModality,
                                positionImg: require('../../../static/img/search/positionImg.png'),
                                positionName:result[i].bodyPart,
                                value: '4',
                                reportId:result[i].reportPk,
                                syudyUid:result[i].studyInstanceUid,
                            })
                        }
                    }
                }).catch((error)=>
                    console.log(error)
                )
            },
            //点击
            details(rid,uid){
                console.log(rid+','+uid)
                this.$cookies.set('rid',rid);
                this.$cookies.set('uid',uid);
                this.$cookies.set('hCode',this.hosCode);
                this.$router.push({
                    name:'DetailsList',
                    /*params:{
                        'id':rid,
                        'uid':uid,
                        'hCode':this.hosCode
                    }*/
                })
            },
            getReport:function(){
                this.$axios({
                    method:'get',
                    url:'/api/getReport',
                    params: {
                        'hosCode':this.hosCode,
                        'pageNum':this.infiniteLoadData.initialShowNum,
                        'pageSize':this.infiniteLoadData.everyLoadingNum
                    }
                }).then((res) =>{          //这里使用了ES6的语法
                    console.log(res)       //请求成功返回的数据
                    if(res.data.code=='0'){
                        var resultList = res.data.data
                        for(var i = 0; i <resultList.length ; i++){
                            this.cardList.push({
                                Img: require('../../../static/img/search/Img1.jpg'),
                                name: resultList[i].hosName,
                                dateImg: require('../../../static/img/search/dateImg.png'),
                                date: resultList[i].studyDate,
                                equimentImg: require('../../../static/img/search/equimentImg.png'),
                                equimentName:resultList[i].checkModality,
                                positionImg: require('../../../static/img/search/positionImg.png'),
                                positionName:resultList[i].bodyPart,
                                value: '4',
                                reportId:resultList[i].reportPk,
                                syudyUid:resultList[i].studyInstanceUid,
                            })
                        }
                        this.infiniteLoadData.initialShowNum++
                        console.log(this.infiniteLoadData.initialShowNum)
                    }
                }).catch((error) =>
                    console.log(error)       //请求失败返回的数据
                )
            },
            /**
             * 获取上拉加载的初始数据
             */
            getPullUpDefData () {
                this.infiniteLoadData.pullUpList = []
                this.getReport()
                console.log(this.infiniteLoadData.initialShowNum)
                if (this.cardList.length < this.infiniteLoadData.initialShowNum) {
                    for (let i = 0; i < this.cardList.length; i++) {
                        this.infiniteLoadData.pullUpList.push(this.cardList[i])
                    }
                } else {
                    for (let i = 0; i < this.infiniteLoadData.initialShowNum; i++) {
                        this.infiniteLoadData.pullUpList.push(this.cardList[i])
                    }
                }
                this.getStartPullUpState()
            },

            /**
             * 获取上拉加载的pullUpState状态
             */
            getStartPullUpState () {
                if (this.infiniteLoadData.pullUpList.length) {
                    if (this.cardList.length <= this.infiniteLoadData.initialShowNum) {
                        // 修改子组件的pullUpState状态
                        this.infiniteLoadData.pullUpState = 3
                    } else {
                        this.infiniteLoadData.pullUpState = 1
                    }
                } else {
                    this.infiniteLoadData.pullUpState = 0
                }
            },

            /**
             * 上拉一次加载更多的数据
             */
            getPullUpMoreData () {
                this.showPullUpListLength = this.infiniteLoadData.pullUpList.length
                this.getReport()
                if (this.infiniteLoadData.pullUpList.length + this.infiniteLoadData.everyLoadingNum > this.cardList.length) {
                    for (let i = 0; i < this.cardList.length - this.showPullUpListLength; i++) {
                        this.infiniteLoadData.pullUpList.push(this.cardList[i + this.showPullUpListLength])
                    }
                } else {
                    for (let i = 0; i < this.infiniteLoadData.everyLoadingNum; i++) {
                        this.infiniteLoadData.pullUpList.push(this.cardList[i + this.showPullUpListLength])
                    }
                }
                if (this.cardList.length === this.infiniteLoadData.pullUpList.length) {
                    this.infiniteLoadData.pullUpState = 3
                } else {
                    this.infiniteLoadData.pullUpState = 1
                }
            },

            /**
             * 下拉刷新
             */
            onRefresh (done) {
                // 如果下拉刷新和上拉加载同时使用，下拉时初始化上拉的数据
                this.getStartPullUpState()
                this.getPullUpDefData()
                done() // call done
            },

            /**
             * 上拉加载
             */
            onInfiniteLoad (done) {
                if (this.infiniteLoadData.pullUpState === 1) {
                    this.getPullUpMoreData()

                }
                done()
            }
        },
        components: {
            'v-refresh': DropDownRefresh,
            'v-reload': PullUpReload
        },
        created() {
            //this.hosCode = this.$route.params.hosCode;
            this.hosCode=this.$cookies.get('hCode')
            console.log(this.hosCode)
            this.getReport()
        }
    }
</script>

<style lang="scss" scoped>
    @import './SearchPage.scss';
</style>
