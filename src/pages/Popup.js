import React, { Component } from 'react';
import Popup , { P } from '../components/popup';

export default class PopupDemo extends Component {
  render() {
    return (
      <div>
            <Popup />
            <h1>Popup Demo</h1>
            <p>
                <button onClick={()=>{
                    P.confirm({
                        title: 'Title',
                        message: 'Hi brother, give me a star, please!',
                        option: [{
                            text: '点赞',
                            fn: () => {
                                alert('很赞')
                            }
                        }, {
                            text: '残忍拒绝',
                            fn: () => {
                                alert('太残忍')
                            }
                        }, {
                            text: '取消',
                        }]
                    });
                }}> 确认多按钮(confirm)</button>
            </p>
                

            <p>
                <button onClick={()=>{
                    P.confirm({
                        title: 'Title',
                        message: 'long message long message long message long message long message long message long message long message long message long message long message ',
                        option: [{
                            text: '确定',
                            fn: () => {
                                alert(124)
                            }
                        }, {
                            text: '取消',
                        }]
                    });
                }}> 确认长消息(confirm)</button>
            </p>

            <p>
                <button onClick={()=>{
                    P.loading('加载中')
                    setTimeout(P.loaded,2000)
                }}>加载中(loading)</button>
            </p>

            <p>
                <button onClick={()=>{
                    P.progress.start('图片上传中')
                    let i = 0.1;
                    let interval = setInterval(()=>{
                        i+=0.1*Math.random();
                        if (i>=1) {
                            clearInterval(interval);
                            i=1;
                            P.progress.done('上传完成!');
                            return;
                        };
                        P.progress.set(i)
                    },200)

                }}>进度条(progress)</button>
            </p>

            <p>
                <button onClick={()=>{
                    P.notify('密码错误')
                }}>提示(notify)</button>
            </p>
        </div>
    );
  }
}