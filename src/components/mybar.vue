<template>
<div>
   <div class="userCenter">
        <div class="header border-b">
            <div class="headerBox">
                <div class="headerText textover ft18">我的E宠</div> 
                <div class="left-back"></div> 
                <div class="right-more"></div>
            </div> 
            <div class="menuBox" style="display: none;">
                <div class="menuBox-nav flex">
                    <a href="/app" class="it1">
                        <span class="mNavIco1"></span> 
                        <div>首页</div>
                    </a> 
                    <a href="" class="it1">
                        <span class="mNavIco2"></span> 
                        <div>商品分类</div>
                    </a> 
                    <a href="" class="it1">
                        <span class="mNavIco3 relative"><!----></span> 
                        <div>购物车</div>
                    </a> 
                    <a href="/app/user" class="it1">
                        <span class="mNavIco4"></span> 
                        <div>我的e宠</div>
                    </a>
                </div>
            </div>
        </div>
    </div>


    <div class="userinfo">
        <div class="clearfix operation pt15 ftc">
            <div class="fl ml5">
                <a href="" class="db">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTEzNTAxQTFERDg1MTFFOEIyNDlDRUE4ODhBRUIwRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTEzNTAxQTBERDg1MTFFOEIyNDlDRUE4ODhBRUIwRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEIwNUY5REZDMDY3MTFFODhDQzVFNTJCQkU3MEY1QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEIwNUY5RTBDMDY3MTFFODhDQzVFNTJCQkU3MEY1QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IVkSFAAAE6ElEQVR42syaa2wVRRTH+8DybHsLVIpSHgI2xShQUCEaI4khYiLhAxBIDJAYNOEDxAQij/LwAZqqEUUUgRDkk3wgYojyNBAIaISQ0PAoaD/wTFteghS4WLv+T/xvPB17987s3ZvuJL/Mtntm5py7szP/mdlcz/NyIkrlYAl4DpSQbuAuuAlugMNgJbgUVaO5EQVQBo6Cfha2TWAkuBJFw50i+iEW0flb4D3+wvKr/wG6g0IwBCwDD4MF4K1IWpYnkCEJ8Kf3b1qcxraadjdBjwjajiSANXTqLuibxrY37SR9GocAJnn/pRWWZVbR/m8wo6MD+JLOHAYFlmXE7heWawHLQadsBNAfjABlIJcNlxo2JWAm3wOXhqUr/aqe3jkwF1SAPLYn7Q4H5a4B9AK7vLbpgbqujqLvgs6ghl3JTEnj752gp00A+eCgF5yWRhSAj/zqa0Fjmnb38skEBrBcFXgdFIMq8BIYy26Vk0UGgRfYnrRbBGYrn+YGBVCpHt3mLDvqyhY1VD+eKoAfaHSekccpgAT9krSjvQDGqMc0JWbO+0xXPo4xA9jGGyfae1Figvh1kn5u9f/vi7nxzNeKPMpQXvUFr4LRoAg0glqwg0o0tGwDa8A68LKpRkWz96BiDJt6gvfB7BQq9wFYD6qpWsOkoczvmGq0ho+mlfomzFj+u9I4e8BC8AZYAn5i3ZLOgMdC6i6/jg/Md6BATe1NjtJAZMFvLFsLRqawGwXqaHeac4xtGyVqojukdZc2GgjuhZAL3yjniywcOUf71Q5trGCZO+Zkahp+QcOTlhUPYJcRnrQs8wy7QpJPz6ZMfao1hGn4vBpr+1lUPI+2Pzr25wMsN8vCdmB7479PnvGWH1XXwyxGhUrm+x1HkwPMn7KwrVDXx82bZgBJcJvXhRaV92be6BiAb9/LwraY+S0OxYEBdOHkI+mqReXXmPdxDMC3v25he1sF0jldAGPVdb1F5WeYj3MM4EXmtRa2deq6Kt22yldqSMyxfMFaiO0o9LQahUoty/hD7+dBo9BgtR5Y5DCibHCYB2SCPBtiHljMMs1c9PwvgK7gOI2uOK4HzJl4eAq7KsoIX064zMTF9MvjjkYXM4CP1TbHhBA6pdLQQruUFpKnuU/pmLqQWugV+udRu7UJ4BpvrMxAr8tuxtfgrxSL8iQX74kM2viQdTWY64EC5uczkNMyJL7J7fOJYAQlehNHku0R7EhfZN7VHIW2MrJTMV6R5dE/Sd+aXehZ9ainxzSA15SPo9sbRr/nzQugMGbOy6h4kf59l2oeqFDrgXUxC8Cfa8S/IfqeecQkJy2reD0HbAODKdru8+TlLGjNiT7lUXk+Sk12nXJmMjcbJL0NaoKkRD7Xr0HpBtjoIB3SIfVsYr1BaTdf5LS70wm+D62qcLPqXp7aAFitZ0VHZPb/zGjH7ybNRjvbU83cQQ3I/vwTxsQj4m2Bkg4eNwOKHZ0vVdLFPx+Yz/q1fJD2+2TjhCafEsGf2n8GD4U8oVnI+jrkiGmaCuIdyzLvKuenxuGU8hM6dN9il6FMSfaP4nLM2h1ctdxPivycOIqT+mawGcwnLRRtclJ/j8JLvpt4hPclbWqzvxmDbyVkkX7M8luJy2BUiJ2MrAbgb6sv5caAXCe4i5Dk02gAR/gtRUPcvlbpsPSPAAMAGD8KmWqC6N0AAAAASUVORK5CYII="></a>
                </div> 
                <div class="fr mr5 dib rela">
                    <a href="/app/standletter/notice" class="db">
                        <img data-v-2f7aef8e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEFDQTczNkNERDg1MTFFODlDMjY4NzJEMkExMEZGMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEFDQTczNkJERDg1MTFFODlDMjY4NzJEMkExMEZGMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTEzRDlFMUFDMDY3MTFFOEJFQTZCMzM5OEY0N0I3NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzRDlFMUJDMDY3MTFFOEJFQTZCMzM5OEY0N0I3NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47zYVrAAAEWUlEQVR42uyaWUgVURjH7x0XsrQsNVrMlFIrqGgjDfEWRQ9Fm0RgEfhQ4EMhQU89tEEv4UPRQ/RQRAX1YAstRCmYLWTrQ5RlWt1sVSkNS1Hv7fb/7D91Gu61uTOac6EPfoyOc875vnPOnPkW3YFAwBXJorkiXKL7qJ+JYCGYBiaBDJAIhnGSWsE3UE8egBugBny3M7DbxhaaDDaCVSDdYh/vQBk4Ae7/KwMWgR0gT7nXDMrBPc7qC/AZfOEM66shK5UF5gEPGKf0cQvsBefD0kYMMMl0UBn4La3gAJgD3GH0ozIblIJPSr9V7NNUH2YeigHbQScHaAZbwWCLSgdD+toMPnKMbrCLY9syIJkzIuIH+0FCHypuJJ4r4ueYN0CKVQOyQT07egPy+1FxI3nAy7FfUpewDJgI3rODO2DMP1ReXf2b1OEDdTJlQCqoY8OrfbzXrbwb5dSlLth2MjaIBtVsUD3AyqtG3KVOFUDrzYBtfFD233AHKK/uCn1Ll4QyIAN0gO9ggYOU11lKA9pBejADjvOBYw5UPqSOuiuRxs+/fPYzQYNDnc/xoJZOqPhidbo7vYU3TzlYeZHX4DiIAsW6L6TxnA3QN3E5nFnUtUlOTdlCObDjNngJJkRIHPMMZIP5GgMRkcsWOzsIOsGhfm6jyhVe58uSlHFJCi0uqY/tff3cRqWQ7c9oDDJcfLsjRR7zOknj0STitdjZYdAFjvRzG2MoKjJKXmI9pnRHWDKiG/g1/iASE4FZlYDG4FtkRAQpPpTXNtWAZDvpGbCTx+Ogvyz9brDJpgFjef0oR9IFHkmrbXwds5SswgrlfhpIUn5frjyXbmO8tezjtMYsmcuQ5wlXJC+kHwYrQRxYA+6Ch6CA9wr5jB+02BhvLq+PxBoPramx6aNcCpiXszbHes5+PHoY2cgbs2xGTbUGRZsMSSuRJzaTBLOVvqPkpfKBk6AEFClbKlx5y+TuKiZ3Jb64yBd8KR1FcRjP0Q+yKsW8Hu3ZirRqCkPJNpDoYFc6gxlCn55m0QMaScheBfFgg4PP/z0glkFNvTG5W8C9dd2hs7+M+n0F44MF9SP4QJsDlU9VEr8lveWFOvhQrIOUl8TWAyVT+EdiS62RDaEb0E5X1wkiOl0CM7nn1xlLUqoBC3593ZwhI0FFT9j4M1OymF/8kFXKIl4vOkB5D2tmOfyeiBGveisxTeXZKmfs6AHc74ksougFjmtMs/+1wKF7pPsGSPEEni7N1KOLZa1osyUm/fRJMVkG2gBukSiLSks4m8tJa1F8pUoWFE31oxe6m5gf3cq3voH32ukGZ3I/you0hPf0RIAxlk7l35tZ4I7hFz6J/pAkpHK5z0cr7apAadjvIC0poi9kRvws/K0HcYYZSWH626x4WdSbYXX7qYXufJ5EWVyNZM6kzGIjA5Ob9Cbfh5iPWHq2M1jcHs6kwVeGrl6e5/dZ2H5q97iy868G//9bpS/khwADAOwYKYZNFJk3AAAAAElFTkSuQmCC"> <!---->
                    </a>
                </div>
            </div> 
            <div class="clearfix pl10 pr10 user_info">
                <div class="userphoto fl">
                    <a href="" class="db" >
                        <img src="https://static.epetbar.com/static_wap/appmall/avatar/cat.png"></a></div> <div data-v-2f7aef8e="" class="username"><div data-v-2f7aef8e="" class="cfff ft16"></div> <!----> <div data-v-2f7aef8e="" class="grade nologin mt15">
                        <a href="#/login">
                            <span class="cfff">{{login}}</span>
                        </a> 
                        <span class="cfff">│</span> 
                        <a href="#/register">
                            <span class="cfff" @click="checkout">{{reg}}</span>
                    </a>
                    </div>
                </div>
            </div> 
            <div class="vip pl10 pr10">
                <div class="vipcon pt5 pb5 pr20 clearfix">
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc">
                            <div class="rela ml20">
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png"> 
                                <!----> <!---->
                            </div>
                        </a>
                    </div>
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc">
                            <div class="rela ml20">
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png"> <!----> <!---->
                            </div>
                        </a>
                    </div>
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc">
                            <div class="rela ml20">
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png"> <!----> <!---->
                            </div>
                        </a>
                    </div>
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc">
                            <div class="rela ml20">
                                <img src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png"> <!----> <!---->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <div class="mymould_20" style="margin-bottom: 37.0667px;"><!----></div>
        
        <div class="mymould_22" style="margin-bottom: 24.2667px;">
            <div data-v-2f7aef8e="" class="pl10 pr10">
                <div class="myorder">
                    <div class="clearfix title pt10 pl10 pr10">
                        <div class="fl">
                            <a href="javascript:mode_login('您还未登录，请先登录');">
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/390880ba4e224747ebde28b56fe807da.png">
                            </a>
                        </div> 
                        <div class="fr">
                            <a href="javascript:mode_login('您还未登录，请先登录');">
                                <img src="">
                            </a>
                        </div>
                    </div> 
                    <div class="clearfix mt20 pb10">
                        <div class="fl" style="width: 20%;">
                            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                                <div class="rela">
                                    <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png" lazy="loaded"> <!----> <!---->
                                </div> 
                                <div class="ft12 ftc ell mt5">待付款</div>
                            </a>
                        </div>
                        <div class="fl" style="width: 20%;">
                            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                                <div class="rela">
                                    <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" lazy="loaded"> <!----> <!---->
                                </div> 
                                <div class="ft12 ftc ell mt5">待收货</div>
                            </a>
                        </div>
                        <div class="fl" style="width: 20%;">
                            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                                <div class="rela">
                                    <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" lazy="loaded"> <!----> <!---->
                                </div> 
                                <div class="ft12 ftc ell mt5">待评价</div>
                            </a>
                        </div>
                        <div class="fl" style="width: 20%;">
                            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                                <div class="rela">
                                    <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" lazy="loaded"> <!----> <!---->
                                </div> 
                                <div class="ft12 ftc ell mt5">退换记录</div>
                            </a>
                        </div>
                        <div class="div_line fl" style="width: 20%;">
                            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                                <div class="rela">
                                    <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" lazy="loaded"> <!----> <!---->
                                </div> 
                                <div class="ft12 ftc ell mt5">国际订单</div>
                            </a>
                        </div>
                    </div> <!---->
                </div>
            </div>
        </div>

 
    <div class="mymould_23" style="margin-bottom: 24.2667px;">
        <div class="pl10 pr10">
            <div class="wallet pad10">
                <div class="clearfix title">
                    <div class="fl">
                        <a href="javascript:mode_login('您还未登录，请先登录');">
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/09/b5103c1385810f1a1f76891c8ee6d3ef.png">
                        </a>
                    </div> 
                    <div class="fr">
                        <a href="javascript:mode_login('您还未登录，请先登录');">
                            <img src="">
                        </a>
                    </div>
                </div> 
                <div class="clearfix mt20">
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela"><!----> 
                                <span class="bold ft14 cred">0</span> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">优惠券</div>
                        </a>
                    </div>
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela"><!----> 
                                <span class="bold ft14 cred">0</span> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">E宠币</div>
                        </a>
                    </div>
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela"><!----> 
                                <span class="bold ft14 cred">0.00</span> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">余额</div>
                        </a>
                    </div>
                    <div class="fl" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela"><!----> 
                                <span class="bold ft14 cred">0.00</span> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">红包</div>
                        </a>
                    </div>
                </div> <!---->
            </div>
        </div>
    </div>

    <div class="mymould_25" style="margin-bottom: 24.2667px;">
        <div data-v-2f7aef8e="" class="pl10 pr10">
            <div class="myservice pad10">
                <div class="clearfix title">
                    <div class="fl">
                        <a href="javascript:mode_login('您还未登录，请先登录');">
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/09/1cadc7c68de1db0b2ef68929b5a97bd6.png">
                        </a>
                    </div> 
                    <div class="fr">
                        <a href="javascript:mode_login('您还未登录，请先登录');">
                            <img data-v-7ef4b672="" src="">
                        </a>
                    </div>
                </div> 
                <div class="clearfix mt20">
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/28/16/4322689f4d28ec8ba8e4eff73a333803.png" src="https://img2.epetbar.com/nowater/2018-11/28/16/4322689f4d28ec8ba8e4eff73a333803.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">联系客服</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png" src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">潮品预售</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/5e73c64777a9468146843c538aad2543.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/5e73c64777a9468146843c538aad2543.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">我的团购</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png" src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">我的收藏</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/28/17/97a4b02ff70fe492684838bf022d6cc9.png" src="https://img2.epetbar.com/nowater/2018-11/28/17/97a4b02ff70fe492684838bf022d6cc9.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">随手送礼</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/8563e3584dd6756bdd0ad23e3ee808e7.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/8563e3584dd6756bdd0ad23e3ee808e7.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">我的兑换</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png" src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">我的关注</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png" src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">萌爪联盟</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png" src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div class="ft12 ftc ell mt5">我的捐赠</div>
                        </a>
                    </div>
                    <div class="fl mb10 mt10" style="width: 25%;">
                        <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                            <div class="rela">
                                <img data-src="https://img2.epetbar.com/nowater/2019-01/10/17/18bd0640beaff4eaa8ee6b1956ddeefa.png" src="https://img2.epetbar.com/nowater/2019-01/10/17/18bd0640beaff4eaa8ee6b1956ddeefa.png" lazy="loaded"> <!----> <!---->
                            </div> 
                            <div data-v-7ef4b672="" class="ft12 ftc ell mt5">商务合作</div>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                login: '登录',
                reg: '注册'
            }
        },
        mounted() {
           
            if(localStorage.getItem("token")) {
                //登录状态
                this.login = localStorage.getItem("user");
                this.reg = '退出'
            }
        }
        ,methods: {
            checkout() {
                if(localStorage.getItem("token")) {
                //登录状态
                this.login = '登录';
                this.reg = '注册'
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }
            }
        }
    }



</script>



<style scoped>
@import url(../style/user.css);
@import url(../style/qq.css);
</style>
