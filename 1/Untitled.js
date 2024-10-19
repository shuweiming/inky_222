var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"story_start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"story_start":[["^命运的岔路：从中国到世界","\n","^你出生在1994年，一个普通的工人家庭。父母都是工厂工人，家庭生活平稳。","\n","^中国加入WTO（2001年），国际贸易快速增长。你们家面临两个选择：","\n",["ev",{"^->":"story_start.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^父母选择下海经商，开设一家小工厂，参与出口贸易 ",{"->":"$r","var":true},null]}],["ev",{"^->":"story_start.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^父母选择维持现状，继续在国企工作 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"story_start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"wto_choice_A"},"\n",{"#f":5}],"c-1":["ev",{"^->":"story_start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"wto_choice_B"},"\n",{"#f":5}]}],{"#f":1}],"wto_choice_A":[["^家里参与国际贸易，成功赚取了大量财富。你享受更好的学习资源，并且搬到了一座沿海大城市。","\n","^SARS疫情爆发（2003年），突如其来的疫情影响了你所在的城市。你们家再次面临选择：","\n",["ev",{"^->":"wto_choice_A.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^返回家乡，回到较为安全的环境 ",{"->":"$r","var":true},null]}],["ev",{"^->":"wto_choice_A.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^留在城市，继续参与生意和生活 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wto_choice_A.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"sars_A"},"\n",{"#f":5}],"c-1":["ev",{"^->":"wto_choice_A.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"sars_B"},"\n",{"#f":5}]}],{"#f":1}],"sars_A":["^你们选择返回家乡，避开了疫情的冲击。家乡的小工厂逐渐恢复生产，家庭经济也逐步复苏。","\n",{"->":"trade_war_event"},{"#f":1}],"sars_B":["^你们选择继续留在城市，但疫情打击了生意，家庭陷入经济低谷。这段时间，你开始思考人生的方向，并最终决定成为一名医生。","\n",{"->":"trade_war_event"},{"#f":1}],"wto_choice_B":[["^父母继续在国企工作，家庭生活稳定，但生活没有重大变化。你顺利完成学业，开始在一家大型企业工作。","\n","^2008年全球金融危机爆发，经济大萧条影响到企业发展。你面临选择：","\n",["ev",{"^->":"wto_choice_B.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^主动辞职，寻找新兴产业的机会 ",{"->":"$r","var":true},null]}],["ev",{"^->":"wto_choice_B.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^坚持留在企业，期待经济复苏 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wto_choice_B.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"financial_crisis_A"},"\n",{"#f":5}],"c-1":["ev",{"^->":"wto_choice_B.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"financial_crisis_B"},"\n",{"#f":5}]}],{"#f":1}],"financial_crisis_A":["^你选择了辞职，投入到互联网和新兴科技产业的浪潮中，抓住了新的机会。","\n",{"->":"trade_war_event"},{"#f":1}],"financial_crisis_B":["^你坚持留在企业，等待经济复苏，然而公司裁员，你不得不重新开始寻找职业方向。","\n",{"->":"trade_war_event"},{"#f":1}],"trade_war_event":[["^2018年，中美贸易战加剧，全球经济再次进入动荡时期。你此时已经有了家庭和稳定的事业，面临选择：","\n",["ev",{"^->":"trade_war_event.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^转向国内市场，寻找新的增长点 ",{"->":"$r","var":true},null]}],["ev",{"^->":"trade_war_event.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^积极扩展海外市场，寻求机会 ",{"->":"$r","var":true},null]}],["ev",{"^->":"trade_war_event.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^投资新兴技术行业，比如人工智能和绿色能源 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"trade_war_event.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"trade_war_A"},"\n",{"#f":5}],"c-1":["ev",{"^->":"trade_war_event.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"trade_war_B"},"\n",{"#f":5}],"c-2":["ev",{"^->":"trade_war_event.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"trade_war_C"},"\n",{"#f":5}]}],{"#f":1}],"trade_war_A":["^你们选择深耕国内市场，成功避开了全球经济的波动，企业开始逐渐壮大。","\n",{"->":"covid_event"},{"#f":1}],"trade_war_B":["^你们扩展了海外市场，但中美贸易战带来的政策风险让企业陷入危机，你不得不寻找新的出路。","\n",{"->":"covid_event"},{"#f":1}],"trade_war_C":["^你投资了人工智能和绿色能源行业，这一前瞻性的决定让你在未来的科技革命中受益匪浅。","\n",{"->":"covid_event"},{"#f":1}],"covid_event":[["^2020年全球疫情爆发，再次冲击全球经济和社会。你面临着新的挑战和抉择：","\n",["ev",{"^->":"covid_event.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^开始转向线上业务，推动企业数字化转型 ",{"->":"$r","var":true},null]}],["ev",{"^->":"covid_event.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^保守经营，等待疫情过后恢复 ",{"->":"$r","var":true},null]}],["ev",{"^->":"covid_event.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^积极投身医疗行业，成为抗疫志愿者 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"covid_event.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"covid_A"},"\n",{"#f":5}],"c-1":["ev",{"^->":"covid_event.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"covid_B"},"\n",{"#f":5}],"c-2":["ev",{"^->":"covid_event.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"covid_C"},"\n",{"#f":5}]}],{"#f":1}],"covid_A":["^你的企业成功实现了数字化转型，迎来了新的增长机会，成为行业的领先者。","\n",{"->":"climate_event"},{"#f":1}],"covid_B":["^你选择保守经营，然而疫情的长期影响让企业陷入困境。","\n",{"->":"climate_event"},{"#f":1}],"covid_C":["^你积极参与抗疫工作，深感医疗资源的重要性，开始投身公益事业。","\n",{"->":"climate_event"},{"#f":1}],"climate_event":[["^2024年，全球气候变化引发的洪水，你的生活和事业再一次受到威胁。你面临以下选择：","\n",["ev",{"^->":"climate_event.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^加入国际环保组织，推动气候行动 ",{"->":"$r","var":true},null]}],["ev",{"^->":"climate_event.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^搬迁到较为安全的地区，保障家人的安全 ",{"->":"$r","var":true},null]}],["ev",{"^->":"climate_event.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^继续留在当前城市，进行基础设施改造 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"climate_event.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"climate_A"},"\n",{"#f":5}],"c-1":["ev",{"^->":"climate_event.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"climate_B"},"\n",{"#f":5}],"c-2":["ev",{"^->":"climate_event.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"climate_C"},"\n",{"#f":5}]}],{"#f":1}],"climate_A":["^你积极参与国际环保组织，成为气候行动的倡导者，影响了更多的人加入气候保护行动。","\n",{"->":"the_end"},{"#f":1}],"climate_B":["^你们搬迁到了较为安全的地区，避免了灾难的直接冲击，生活逐步恢复正常。","\n",{"->":"the_end"},{"#f":1}],"climate_C":["^你坚持留在城市，通过基础设施改造，成功减少了自然灾害的影响，但过程充满艰辛。","\n",{"->":"the_end"},{"#f":1}],"the_end":["end",{"#f":1}],"#f":1}],"listDefs":{}};