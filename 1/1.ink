-> story_start

== story_start ==
命运的岔路：从中国到世界

你出生在1994年，一个普通的工人家庭。父母都是工厂工人，家庭生活平稳。

中国加入WTO（2001年），国际贸易快速增长。你们家面临两个选择：
* 父母选择下海经商，开设一家小工厂，参与出口贸易 -> wto_choice_A
* 父母选择维持现状，继续在国企工作 -> wto_choice_B

== wto_choice_A ==
家里参与国际贸易，成功赚取了大量财富。你享受更好的学习资源，并且搬到了一座沿海大城市。

SARS疫情爆发（2003年），突如其来的疫情影响了你所在的城市。你们家再次面临选择：
* 返回家乡，回到较为安全的环境 -> sars_A
* 留在城市，继续参与生意和生活 -> sars_B

== sars_A ==
你们选择返回家乡，避开了疫情的冲击。家乡的小工厂逐渐恢复生产，家庭经济也逐步复苏。
-> trade_war_event

== sars_B ==
你们选择继续留在城市，但疫情打击了生意，家庭陷入经济低谷。这段时间，你开始思考人生的方向，并最终决定成为一名医生。
-> trade_war_event

== wto_choice_B ==
父母继续在国企工作，家庭生活稳定，但生活没有重大变化。你顺利完成学业，开始在一家大型企业工作。

2008年全球金融危机爆发，经济大萧条影响到企业发展。你面临选择：
* 主动辞职，寻找新兴产业的机会 -> financial_crisis_A
* 坚持留在企业，期待经济复苏 -> financial_crisis_B

== financial_crisis_A ==
你选择了辞职，投入到互联网和新兴科技产业的浪潮中，抓住了新的机会。
-> trade_war_event

== financial_crisis_B ==
你坚持留在企业，等待经济复苏，然而公司裁员，你不得不重新开始寻找职业方向。
-> trade_war_event

== trade_war_event ==
2018年，中美贸易战加剧，全球经济再次进入动荡时期。你此时已经有了家庭和稳定的事业，面临选择：
* 转向国内市场，寻找新的增长点 -> trade_war_A
* 积极扩展海外市场，寻求机会 -> trade_war_B
* 投资新兴技术行业，比如人工智能和绿色能源 -> trade_war_C

== trade_war_A ==
你们选择深耕国内市场，成功避开了全球经济的波动，企业开始逐渐壮大。
-> covid_event

== trade_war_B ==
你们扩展了海外市场，但中美贸易战带来的政策风险让企业陷入危机，你不得不寻找新的出路。
-> covid_event

== trade_war_C ==
你投资了人工智能和绿色能源行业，这一前瞻性的决定让你在未来的科技革命中受益匪浅。
-> covid_event

== covid_event ==
2020年全球疫情爆发，再次冲击全球经济和社会。你面临着新的挑战和抉择：
* 开始转向线上业务，推动企业数字化转型 -> covid_A
* 保守经营，等待疫情过后恢复 -> covid_B
* 积极投身医疗行业，成为抗疫志愿者 -> covid_C

== covid_A ==
你的企业成功实现了数字化转型，迎来了新的增长机会，成为行业的领先者。
-> climate_event

== covid_B ==
你选择保守经营，然而疫情的长期影响让企业陷入困境。
-> climate_event

== covid_C ==
你积极参与抗疫工作，深感医疗资源的重要性，开始投身公益事业。
-> climate_event

== climate_event ==
2024年，全球气候变化引发的洪水，你的生活和事业再一次受到威胁。你面临以下选择：
* 加入国际环保组织，推动气候行动 -> climate_A
* 搬迁到较为安全的地区，保障家人的安全 -> climate_B
* 继续留在当前城市，进行基础设施改造 -> climate_C

== climate_A ==
你积极参与国际环保组织，成为气候行动的倡导者，影响了更多的人加入气候保护行动。
-> the_end

== climate_B ==
你们搬迁到了较为安全的地区，避免了灾难的直接冲击，生活逐步恢复正常。
-> the_end

== climate_C ==
你坚持留在城市，通过基础设施改造，成功减少了自然灾害的影响，但过程充满艰辛。
-> the_end

== the_end ==
->END