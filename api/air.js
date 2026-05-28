export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  const sido = req.query.sido || '서울';
  const key = '4a152aecad51597864f63a30de1d4eca4ee942b972ad2e7fc177a7db6bf77587';
  const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${key}&returnType=json&numOfRows=1&pageNo=1&sidoName=${encodeURIComponent(sido)}&ver=1.0`;
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
