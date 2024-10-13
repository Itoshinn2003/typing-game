export const firstCode: String = 
`<!doctype html>
<html lang="en">
 <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <title>TYPING-CODE</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
 </head>
 <body>
     <header>
     <div class="logo">
         <h1>This is TypingGame!</h1>
         <p>Let's type!</p>
     </div>
     </header>`;

export const endCode: String = 
     `    <script src="https://code.jquery.com/jquery-3.6.0.min.js">
     </body>
     </head>
 </html>`;

export let words: { [key: string]: string } = {'apple':'りんご','budou':'ぶどう','nashi':'なし','itigo':'いちご','fruits':'フルーツ','september':'9月','life':'人生','animal':'動物'};



// 各オブジェクトの型
type Item = {
    property1: string;
    property2: string;
    property3: string;
    property4: string;
    property5: string;
    property6: string;
    property7: string;
    property8: string;
    property9: string;
    property10: string;
    property11: string;
    property12: string;
    property13: string;
    property14: string;
    property15: string;
    property16: string;
    property17: string;
    property18: string;
    property19: string;
    property20: string;
};

// 20個のオブジェクトを持つ配列の型
type ItemArray = Item[];

// 例: ItemArray型の配列を作成
const Items: ItemArray = [
    {
        property1: 'value1',
        property2: 'value2',
        property3: 'value3',
        property4: 'value4',
        property5: 'value5',
        property6: 'value6',
        property7: 'value7',
        property8: 'value8',
        property9: 'value9',
        property10: 'value10',
        property11: 'value11',
        property12: 'value12',
        property13: 'value13',
        property14: 'value14',
        property15: 'value15',
        property16: 'value16',
        property17: 'value17',
        property18: 'value18',
        property19: 'value19',
        property20: 'value20'
    },
    // 他の19個のオブジェクトも追加
];



export const wordsArray: Items = [{
    'apple': 'りんご', 'book': '本', 'car': '車', 'cat': '猫', 'dog': '犬',
    'banana': 'バナナ', 'orange': 'オレンジ', 'friend': '友達', 'school': '学校',
    'teacher': '先生', 'pen': 'ペン', 'table': 'テーブル', 'chair': '椅子',
    'water': '水', 'music': '音楽', 'milk': '牛乳', 'window': '窓',
    'door': 'ドア', 'tree': '木', 'flower': '花'
},
{
    'bird': '鳥', 'house': '家', 'river': '川', 'mountain': '山',
    'computer': 'コンピュータ', 'phone': '電話', 'sun': '太陽', 'moon': '月',
    'star': '星', 'fish': '魚', 'rain': '雨', 'snow': '雪', 'cloud': '雲',
    'wind': '風', 'grass': '草', 'road': '道', 'train': '電車',
    'bus': 'バス', 'city': '都市'
},
{
    'animal': '動物', 'travel': '旅行', 'family': '家族', 'holiday': '休日',
    'language': '言語', 'garden': '庭', 'exercise': '運動', 'weather': '天気',
    'vegetable': '野菜', 'fruit': '果物', 'bicycle': '自転車', 'internet': 'インターネット',
    'doctor': '医者', 'nurse': '看護師', 'market': '市場', 'story': '物語',
    'party': 'パーティー', 'dance': 'ダンス', 'restaurant': 'レストラン'
},
{
    'adventure': '冒険', 'celebrate': '祝う', 'communication': 'コミュニケーション',
    'education': '教育', 'experience': '経験', 'imagination': '想像力',
    'knowledge': '知識', 'opinion': '意見', 'profession': '職業', 'recommend': '推薦する',
    'responsibility': '責任', 'technology': '技術', 'environment': '環境',
    'information': '情報', 'relationship': '関係', 'science': '科学',
    'solution': '解決策', 'traveling': '旅行すること', 'university': '大学',
    'volunteer': 'ボランティア'
},
{
    'analysis': '分析', 'consequence': '結果', 'development': '発展',
    'economic': '経済的な', 'improvement': '改善', 'investment': '投資',
    'legislation': '法律', 'management': '管理', 'organization': '組織',
    'perspective': '視点', 'presentation': 'プレゼンテーション', 'psychology': '心理学',
    'significant': '重要な', 'theory': '理論', 'transformation': '変革',
    'variability': '変動性', 'volatility': '変動性', 'research': '研究',
    'strategy': '戦略', 'diplomacy': '外交'
},
{
    'architecture': '建築', 'collaboration': '協力', 'conservation': '保護',
    'credential': '資格', 'dedication': '献身', 'diversity': '多様性',
    'entrepreneur': '起業家', 'innovation': '革新', 'integration': '統合',
    'maintenance': '維持', 'motivation': '動機', 'publication': '出版',
    'regulation': '規制', 'sustainability': '持続可能性', 'transportation': '交通',
    'adaptation': '適応', 'evaluation': '評価', 'reputation': '評判'
},
{
    'analyze': '分析する', 'beneficial': '有益な', 'characteristic': '特徴',
    'complicated': '複雑な', 'contribute': '貢献する', 'determination': '決意',
    'essential': '不可欠な', 'frequent': '頻繁な', 'hypothesis': '仮説',
    'imply': '暗示する', 'justification': '正当化', 'logical': '論理的な',
    'participation': '参加', 'persuasion': '説得', 'reliable': '信頼できる',
    'sufficient': '十分な', 'tendency': '傾向', 'transparency': '透明性',
    'unique': '独特な', 'volunteerism': 'ボランティア活動'
},
{
    'adapt': '適応する', 'analytical': '分析的な', 'coherent': '首尾一貫した',
    'deviate': '逸脱する', 'emphasize': '強調する', 'feasible': '実現可能な',
    'fundamental': '基本的な', 'impartial': '公平な', 'metaphor': '隠喩',
    'obtain': '得る', 'preliminary': '予備の', 'proficient': '熟練した',
    'quarantine': '隔離', 'relevant': '関連性のある', 'speculate': '推測する',
    'substantiate': '実証する', 'tolerant': '寛容な', 'unprecedented': '前例のない',
    'vulnerable': '脆弱な', 'warrant': '保証する'
},
{
    'ambiguous': 'あいまいな', 'cognition': '認知', 'contemplate': '熟考する',
    'controversial': '議論を呼ぶ', 'criterion': '基準', 'dilemma': 'ジレンマ',
    'equilibrium': '平衡', 'exemplify': '例示する', 'fundamentals': '基本',
    'imminent': '差し迫った', 'meticulous': '細心の注意を払った',
    'paradox': '逆説', 'perceive': '知覚する', 'rational': '合理的な',
    'superficial': '表面的な', 'theoretical': '理論的な',
    'universal': '普遍的な', 'viable': '実行可能な', 'zealous': '熱心な',
    'synthesize': '統合する'
},
{
    'altruism': '利他主義', 'anomaly': '異常', 'articulate': '明確に表現する',
    'cohesive': '結束した', 'deconstruct': '解体する', 'ephemeral': '儚い',
    'implication': '暗示', 'introspection': '内省', 'manifest': '明らかにする',
    'nuance': '微妙な差異', 'obfuscate': 'わかりにくくする',
    'paradigm': '枠組み', 'perpetuate': '永続させる', 'reciprocate': '返す',
    'resilience': '弾力性', 'soliloquy': '独白', 'transient': '一時的な',
    'ubiquitous': '遍在する', 'vindicate': '正当化する', 'zenith': '頂点'
},
{
    'ascertain': '確かめる', 'catalyst': '触媒', 'deference': '敬意',
    'eclectic': '折衷的な', 'empathy': '共感', 'fortuitous': '偶然の',
    'garrulous': 'おしゃべりな', 'incongruous': '不適合な', 'juxtapose': '並置する',
    'legitimate': '合法の', 'metamorphosis': '変態', 'nostalgia': 'ノスタルジア',
    'precarious': '不安定な', 'quixotic': '空想的な', 'retrospective': '回顧的な',
    'sanguine': '楽観的な', 'taciturn': '無口な', 'ubiquity': '遍在',
    'vicarious': '代理の', 'zephyr': 'そよ風'
},
{
    'abate': '減少する', 'alleviate': '軽減する', 'conducive': '助長する',
    'diligent': '勤勉な', 'exacerbate': '悪化させる', 'futile': '無駄な',
    'garrulousness': 'おしゃべり', 'hyperbole': '誇張', 'irrefutable': '反論できない',
    'juxtaposition': '対比', 'meticulousness': '細心', 'nuanced': '微妙な',
    'ostentatious': '派手な', 'pragmatic': '実用的な', 'quintessential': '典型的な',
    'recalcitrant': '頑固な', 'sagacious': '賢明な', 'tenacious': '執拗な',
    'venerated': '尊敬される', 'wistful': '物思いにふけった'
},
{
    'aberration': '逸脱', 'cacophony': '不協和音', 'cogent': '説得力のある',
    'diaphanous': '透き通る', 'effervescent': '発泡性の', 'fortitude': '勇気',
    'garrulousness': 'おしゃべり', 'insipid': '無味乾燥な', 'juxtaposed': '対比された',
    'neophyte': '初心者', 'perfunctory': 'おざなりな', 'quagmire': '沼',
    'recondite': '難解な', 'sacrilegious': '神聖を冒涜する', 'transcend': '超越する',
    'ubiquity': '遍在', 'vicissitude': '変遷', 'wheedle': 'だまして得る',
    'zenith': '頂点', 'anguish': '苦痛'
},
{
    'abjure': '放棄する', 'cognizant': '認識している', 'decry': '非難する',
    'efficacious': '有効な', 'impetuous': '衝動的な', 'jocular': '冗談好きな',
    'moribund': '死にかけている', 'panacea': '万能薬', 'quixotic': '空想的な',
    'recapitulate': '要約する', 'salient': '顕著な', 'ubiquitousness': '遍在',
    'venerable': '尊敬される', 'wizened': 'しわだらけの', 'xenophobia': '外国人嫌悪',
    'yoke': '束縛する', 'zealot': '熱心な支持者', 'disparate': '異なる'
},
{
    'abstruse': '難解な', 'capitulate': '降伏する', 'deference': '敬意',
    'emulate': '模倣する', 'garrulous': 'おしゃべりな', 'hegemony': '覇権',
    'juxtaposition': '対比', 'misanthrope': '人間嫌い', 'nebulous': 'あいまいな',
    'opulent': '豪華な', 'paradigm': '枠組み', 'quintessence': '本質',
    'recalcitrant': '頑固な', 'sagacious': '賢明な', 'tenuous': '薄弱な',
    'undulate': '波のように動く', 'veracity': '真実性'
},
{
    'abrogate': '廃止する', 'cerulean': '空色の', 'deleterious': '有害な',
    'effrontery': '厚かましさ', 'flagitious': '悪質な', 'gregarious': '社交的な',
    'hubris': '傲慢', 'iconoclast': '偶像破壊者', 'juxtapose': '並置する',
    'languid': '弱々しい', 'metaphysical': '形而上学的な', 'nostalgic': '郷愁を誘う',
    'opprobrium': '非難', 'palliative': '緩和する', 'quixotic': '空想的な',
    'redolent': '香りのする', 'soporific': '眠気を誘う', 'truculent': '攻撃的な'
},
{
    'abstruse': '難解な', 'blandishment': 'おべっか', 'chicanery': '詐欺',
    'decrepit': '老朽化した', 'ebullient': '熱狂的な', 'foment': '煽る',
    'halcyon': '平穏な', 'ineffable': '言葉にできない', 'juxtaposition': '対比',
    'kaleidoscope': '万華鏡', 'laudable': '称賛に値する', 'mellifluous': '心地よい音の',
    'neophyte': '初心者', 'obsequious': 'おべっかの', 'paragon': '模範',
    'quizzical': '困惑した', 'resplendent': '輝かしい', 'salubrious': '健康に良い'
},
{
    'apotheosis': '神格化', 'benevolent': '慈悲深い', 'cacophony': '不協和音',
    'deft': '巧妙な', 'effulgent': '輝く', 'flabbergasted': '驚愕した',
    'grandeur': '壮大さ', 'hegemony': '覇権', 'impasse': '行き詰まり',
    'juxtaposition': '対比', 'kismet': '運命', 'luminescent': '発光する',
    'mirthful': '陽気な', 'nostalgia': 'ノスタルジア', 'opalescent': 'オパールのような',
    'perfunctory': 'おざなりな', 'quintessential': '典型的な', 'rebellious': '反抗的な'
},
{
    'apoplexy': '脳卒中', 'bellicose': '好戦的な', 'cacophony': '不協和音',
    'disparate': '異なる', 'efficacious': '有効な', 'fortuitous': '偶然の',
    'grandiloquent': '大言壮語な', 'heterogeneous': '異質な',
    'incorrigible': '矯正できない', 'juxtapose': '並置する',
    'kaleidoscopic': '万華鏡のような', 'loquacious': 'おしゃべりな',
    'metamorphosis': '変態', 'nefarious': '悪辣な', 'obfuscate': 'わかりにくくする',
    'phlegmatic': '冷静な', 'quizzical': '困惑した', 'recalcitrant': '頑固な'
},
{
    'aberration': '逸脱', 'captivate': '魅了する', 'deleterious': '有害な',
    'ephemeral': '儚い', 'fastidious': '好みにうるさい', 'grandiose': '壮大な',
    'harbinger': '前兆', 'inexorable': '容赦ない', 'juxtaposition': '対比',
    'kismet': '運命', 'languorous': 'だるい', 'magnanimous': '寛大な',
    'neologism': '新語', 'obfuscation': 'わかりにくくすること',
    'paradigm': '枠組み', 'quintessential': '典型的な', 'resilient': '弾力性のある',
    'sophistry': '詭弁', 'tenebrous': '暗い', 'ubiquitous': '遍在する'
}]
