<template>
    <div class="details">
        <header>
            <div class="topTitle">
                <van-icon name="arrow-left" class="left" />
                <p>详情</p>
            </div>
        </header>
        <main>
            <div class="centBox">
                <div class="cetercard">
                    <img class="cardleft" src="../../../static/img/details/details.png" alt="" />
                    <div class="cardRight">
                        <p class="cardTitle">影像报告</p>
                        <ul>
                            <li>
                                <p>检查医院：</p>
                                <span>东莞市第三人民医院</span>
                            </li>
                            <li>
                                <p>检查类型：</p>
                                <span>CT</span>
                            </li>
                            <li>
                                <p>检查部位：</p>
                                <span>胸部</span>
                            </li>
                            <li>
                                <p>检查日期：</p>
                                <span>2019-12-29</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="centeBottom">
                    <div class="butAN">
                        <span>图文报告</span>
                        <span>图文详情</span>
                    </div>
                    <div class="centerone">
                        <div class="one_top">
                            <img class="Acon1" src="../../../static/img/details/Acon1.png" alt="">
                            <p class="Aconnum">影像所见</p>
                        </div>
                        <div class="conterDE">
                            双肺纹理增粗，肺内未见明显实质性病变。心脏呈主动脉型，主动脉弓突出钙化。双膈面光滑，肋膈角锐利。
                        </div>
                    </div>
                </div>
            </div>
            <div class="imgOption">
                <div class="optionOne">
                    <img class="Acon1" src="../../../static/img/details/Aicon2.png" alt="">
                     <p class="Aconnum">影像意见</p>
                </div>
                <div class="conterDE">老年性心肺改变。</div>
            </div>
            <div class="report">
                <ul>
                    <li>
                        <p>报告医生:</p>
                        <span>伍彩云</span>
                    </li>
                    <li>
                        <p>审核医生:</p>
                        <span>伍彩云</span>
                    </li>
                    <li>
                        <p>报告日期:</p>
                        <span>2020-03-03</span>
                    </li>
                </ul>
                <p class="fot">
                    声明:本报告仅反映患者当时的检查情况，仅供临床医师参考，不做任何证明使用
                </p>
            </div>
        </main>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import './DetailsList.scss';
</style>
