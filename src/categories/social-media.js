import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function SocialMedia(){
  const words = ["Facebook","Instagram","YouTube","Flickr","LinkedIn","Pinterest","TikTok","WeChat","Line","BeeTalk","WhatsApp","Friendster","Google+","Weibo","QQ","Telegram","Snapchat","Kuaishou","Qzone","X (Twitter)","Reddit","Quora","Discord","Slack","Twitch","Tumblr","Mastodon","hi5","KakaoTalk","Likee","Viber"];
  return (<Questions answers={words} category="Social Media" redirect="/social-media"/>)
}