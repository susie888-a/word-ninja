/* Verified additions from the local bilingual dictionary. */
(() => {
  const extra = {
    basic: [
      ['across','/əˈkrɒs/','穿过；横穿；在对面'],['borrow','/ˈbɒrəʊ/','借；借用'],['bright','/braɪt/','明亮的；聪明的；愉快的'],['careful','/ˈkeəfl/','仔细的；小心的'],['cheerful','/ˈtʃɪəfl/','快乐的；愉快的'],['choose','/tʃu:z/','选择；决定'],['collect','/kəˈlekt/','收集；募捐'],['cough','/kɒf/','咳嗽；咳嗽声'],['crowded','/ˈkraʊdɪd/','拥挤的；塞满的'],['dangerous','/ˈdeɪndʒərəs/','危险的'],['describe','/dɪˈskraɪb/','描述；描绘'],['develop','/dɪˈveləp/','发展；开发；使成长'],['direction','/dəˈrekʃn/','方向；指导；趋势'],['discover','/dɪˈskʌvə(r)/','发现；发觉'],['factory','/ˈfæktri/','工厂；制造厂'],['famous','/ˈfeɪməs/','著名的']
    ],
    exam: [
      ['assemble','/əˈsembl/','集合；装配；收集'],['bias','/ˈbaɪəs/','偏见；偏爱'],['conceive','/kənˈsi:v/','设想；构思；以为'],['confer','/kənˈfɜ:(r)/','授予；给予；协商'],['conform','/kənˈfɔ:m/','符合；遵照；适应'],['consensus','/kənˈsensəs/','一致；共识'],['controversy','/ˈkɒntrəvɜ:si/','争论；辩论'],['controversial','/ˌkɒntrəˈvɜ:ʃl/','有争议的'],['cumulative','/ˈkju:mjələtɪv/','累积的'],['displace','/dɪsˈpleɪs/','取代；转移'],['distort','/dɪˈstɔ:t/','扭曲；使失真；曲解'],['diverge','/daɪˈvɜ:dʒ/','分歧；偏离'],['elaborate','/ɪˈlæbərət/','详尽的；详细阐述'],['encounter','/ɪnˈkaʊntə(r)/','遭遇；偶然遇到'],['enforce','/ɪnˈfɔ:s/','实施；执行；强制'],['enhance','/ɪnˈhɑ:ns/','提高；加强；增加']
    ],
    pro: [
      ['aberration','/ˌæbəˈreɪʃn/','失常；越轨'],['abstain','/əbˈsteɪn/','自制；放弃；避免'],['acquiesce','/ˌækwiˈes/','默许；勉强同意'],['ambivalent','/æmˈbɪvələnt/','矛盾的；好恶相克的'],['arduous','/ˈɑ:djuəs/','费力的；险峻的'],['benevolent','/bəˈnevələnt/','仁慈的；慈善的'],['conspicuous','/kənˈspɪkjuəs/','显著的；显而易见的'],['corroborate','/kəˈrɒbəreɪt/','证实；使坚固'],['cursory','/ˈkɜ:səri/','粗略的；草率的'],['daunting','/dɔ:ntɪŋ/','令人怯步的'],['delineate','/dɪˈlɪnieɪt/','描绘；描写；勾画轮廓'],['diligent','/ˈdɪlɪdʒənt/','勤勉的；用功的'],['eloquent','/ˈeləkwənt/','雄辩的；有说服力的'],['elusive','/iˈlu:sɪv/','难捉摸的；易忘的'],['eminent','/ˈemɪnənt/','杰出的；有名的'],['endeavour',"/ɪn'devə(r)/",'努力；竭力；企图'],['enigmatic','/ˌenɪgˈmætɪk/','神秘的；高深莫测的'],['ephemeral','/ɪˈfemərəl/','短暂的；朝生暮死的'],['equitable','/ˈekwɪtəbl/','公平的；公正的'],['exemplify','/ɪgˈzemplɪfaɪ/','例证；例示'],['exhaustive','/ɪgˈzɔ:stɪv/','详尽的；彻底的'],['expedite','/ˈekspədaɪt/','加快；促进'],['frivolous','/ˈfrɪvələs/','轻佻的；琐碎的'],['gregarious','/grɪˈgeəriəs/','社交的；群居的']
    ]
  };
  Object.entries(extra).forEach(([level, entries]) => {
    const list = window.WORD_NINJA_IMPORTED[level];
    const known = new Set(list.map(item => item[0].toLowerCase()));
    entries.forEach(([word, phonetic, definition]) => {
      if (!known.has(word)) list.push([word, phonetic, `Try to recall the Chinese meaning of “${word}”.`, definition, `欧陆词典释义：${definition}`, '', '', [definition], '']);
    });
  });
})();
