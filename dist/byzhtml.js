// byzhtml v1.0.25
var byzhtml = (function () {
  'use strict';

  var ison = {
  	alternateCodepoint: "U+1D046",
  	codepoint: "U+E000"
  };
  var oligon = {
  	alternateCodepoint: "U+1D047",
  	codepoint: "U+E001"
  };
  var oligonKentimaMiddle = {
  	codepoint: "U+E002"
  };
  var oligonKentimaBelow = {
  	codepoint: "U+E003"
  };
  var oligonKentimaAbove = {
  	codepoint: "U+E004"
  };
  var oligonYpsiliRight = {
  	codepoint: "U+E005"
  };
  var oligonYpsiliLeft = {
  	codepoint: "U+E006"
  };
  var oligonKentimaYpsiliRight = {
  	codepoint: "U+E007"
  };
  var oligonKentimaYpsiliMiddle = {
  	codepoint: "U+E008"
  };
  var oligonDoubleYpsili = {
  	codepoint: "U+E009"
  };
  var oligonKentimataDoubleYpsili = {
  	codepoint: "U+E00A"
  };
  var oligonKentimaDoubleYpsiliRight = {
  	codepoint: "U+E00B"
  };
  var oligonKentimaDoubleYpsiliLeft = {
  	codepoint: "U+E00C"
  };
  var oligonTripleYpsili = {
  	codepoint: "U+E00D"
  };
  var oligonKentimataTripleYpsili = {
  	codepoint: "U+E00E"
  };
  var oligonKentimaTripleYpsili = {
  	codepoint: "U+E00F"
  };
  var oligonIson = {
  	codepoint: "U+E010"
  };
  var oligonApostrofos = {
  	codepoint: "U+E011"
  };
  var oligonYporroi = {
  	codepoint: "U+E012"
  };
  var oligonElafron = {
  	codepoint: "U+E013"
  };
  var oligonElafronApostrofos = {
  	codepoint: "U+E014"
  };
  var oligonChamili = {
  	codepoint: "U+E015"
  };
  var isonApostrofos = {
  	codepoint: "U+E020"
  };
  var apostrofos = {
  	alternateCodepoint: "U+1D051",
  	codepoint: "U+E021"
  };
  var apostrofosSyndesmos = {
  	alternateCodepoint: "U+1D052",
  	codepoint: "U+E022"
  };
  var yporroi = {
  	alternateCodepoint: "U+1D053",
  	codepoint: "U+E023"
  };
  var elafron = {
  	alternateCodepoint: "U+1D055",
  	codepoint: "U+E024"
  };
  var runningElafron = {
  	codepoint: "U+E025"
  };
  var elafronApostrofos = {
  	codepoint: "U+E026"
  };
  var chamili = {
  	alternateCodepoint: "U+1D056",
  	codepoint: "U+E027"
  };
  var chamiliApostrofos = {
  	codepoint: "U+E028"
  };
  var chamiliElafron = {
  	codepoint: "U+E029"
  };
  var chamiliElafronApostrofos = {
  	codepoint: "U+E02A"
  };
  var doubleChamili = {
  	codepoint: "U+E02B"
  };
  var doubleChamiliApostrofos = {
  	codepoint: "U+E02C"
  };
  var doubleChamiliElafron = {
  	codepoint: "U+E02D"
  };
  var doubleChamiliElafronApostrofos = {
  	codepoint: "U+E02E"
  };
  var tripleChamili = {
  	codepoint: "U+E02F"
  };
  var petastiIson = {
  	codepoint: "U+E040"
  };
  var petasti = {
  	alternateCodepoint: "U+1D049",
  	codepoint: "U+E041"
  };
  var petastiOligon = {
  	codepoint: "U+E042"
  };
  var petastiKentima = {
  	codepoint: "U+E043"
  };
  var petastiYpsiliRight = {
  	codepoint: "U+E044"
  };
  var petastiYpsiliLeft = {
  	codepoint: "U+E045"
  };
  var petastiKentimaYpsiliRight = {
  	codepoint: "U+E046"
  };
  var petastiKentimaYpsiliMiddle = {
  	codepoint: "U+E047"
  };
  var petastiDoubleYpsili = {
  	codepoint: "U+E048"
  };
  var petastiKentimataDoubleYpsili = {
  	codepoint: "U+E049"
  };
  var petastiKentimaDoubleYpsiliRight = {
  	codepoint: "U+E04A"
  };
  var petastiKentimaDoubleYpsiliLeft = {
  	codepoint: "U+E04B"
  };
  var petastiTripleYpsili = {
  	codepoint: "U+E04C"
  };
  var petastiKentimataTripleYpsili = {
  	codepoint: "U+E04D"
  };
  var petastiKentimaTripleYpsili = {
  	codepoint: "U+E04E"
  };
  var petastiApostrofos = {
  	codepoint: "U+E060"
  };
  var petastiYporroi = {
  	codepoint: "U+E061"
  };
  var petastiElafron = {
  	codepoint: "U+E062"
  };
  var petastiRunningElafron = {
  	codepoint: "U+E063"
  };
  var petastiElafronApostrofos = {
  	codepoint: "U+E064"
  };
  var petastiChamili = {
  	codepoint: "U+E065"
  };
  var petastiChamiliApostrofos = {
  	codepoint: "U+E066"
  };
  var petastiChamiliElafron = {
  	codepoint: "U+E067"
  };
  var petastiChamiliElafronApostrofos = {
  	codepoint: "U+E068"
  };
  var petastiDoubleChamili = {
  	codepoint: "U+E069"
  };
  var petastiDoubleChamiliApostrofos = {
  	codepoint: "U+E06A"
  };
  var kentima = {
  	alternateCodepoint: "U+1D04F",
  	codepoint: "U+E080"
  };
  var kentimata = {
  	alternateCodepoint: "U+1D04E",
  	codepoint: "U+E081"
  };
  var oligonKentimataBelow = {
  	codepoint: "U+E082"
  };
  var oligonKentimataAbove = {
  	codepoint: "U+E083"
  };
  var oligonIsonKentimata = {
  	codepoint: "U+E084"
  };
  var oligonKentimaMiddleKentimata = {
  	codepoint: "U+E085"
  };
  var oligonYpsiliRightKentimata = {
  	codepoint: "U+E086"
  };
  var oligonYpsiliLeftKentimata = {
  	codepoint: "U+E087"
  };
  var oligonApostrofosKentimata = {
  	codepoint: "U+E088"
  };
  var oligonYporroiKentimata = {
  	codepoint: "U+E089"
  };
  var oligonElafronKentimata = {
  	codepoint: "U+E08A"
  };
  var oligonRunningElafronKentimata = {
  	codepoint: "U+E08B"
  };
  var oligonElafronApostrofosKentimata = {
  	codepoint: "U+E08C"
  };
  var oligonChamiliKentimata = {
  	codepoint: "U+E08D"
  };
  var vareia = {
  	alternateCodepoint: "U+1D058",
  	codepoint: "U+E0A0"
  };
  var psifiston = {
  	alternateCodepoint: "U+1D05A",
  	codepoint: "U+E0A1"
  };
  var antikenoma = {
  	alternateCodepoint: "U+1D05C",
  	codepoint: "U+E0A2"
  };
  var omalon = {
  	alternateCodepoint: "U+1D05B",
  	codepoint: "U+E0A3"
  };
  var omalonConnecting = {
  	codepoint: "U+E0A4"
  };
  var heteron = {
  	alternateCodepoint: "U+1D060",
  	codepoint: "U+E0A5"
  };
  var heteronConnecting = {
  	codepoint: "U+E0A6"
  };
  var endofonon = {
  	alternateCodepoint: "U+1D07B",
  	codepoint: "U+E0A7"
  };
  var yfenAbove = {
  	alternateCodepoint: "U+1D07D",
  	codepoint: "U+E0B0"
  };
  var yfenBelow = {
  	alternateCodepoint: "U+1D07C",
  	codepoint: "U+E0B1"
  };
  var stavros = {
  	alternateCodepoint: "U+1D07E",
  	codepoint: "U+E0C0"
  };
  var breath = {
  	alternateCodepoint: "U+1D112",
  	codepoint: "U+E0C1"
  };
  var stavrosAbove = {
  	alternateCodepoint: "U+1D07E",
  	codepoint: "U+E0C8"
  };
  var klasmaAbove = {
  	alternateCodepoint: "U+1D07F",
  	codepoint: "U+E0D0"
  };
  var klasmaBelow = {
  	alternateCodepoint: "U+1D0F4",
  	codepoint: "U+E0D1"
  };
  var apli = {
  	alternateCodepoint: "U+1D085",
  	codepoint: "U+E0D2"
  };
  var dipli = {
  	alternateCodepoint: "U+1D086",
  	codepoint: "U+E0D3"
  };
  var tripli = {
  	alternateCodepoint: "U+1D087",
  	codepoint: "U+E0D4"
  };
  var tetrapli = {
  	alternateCodepoint: "U+1D088",
  	codepoint: "U+E0D5"
  };
  var koronis = {
  	alternateCodepoint: "U+1D089",
  	codepoint: "U+E0D6"
  };
  var leimma1 = {
  	alternateCodepoint: "U+1D08A",
  	codepoint: "U+E0E0"
  };
  var leimma2 = {
  	alternateCodepoint: "U+1D08B",
  	codepoint: "U+E0E1"
  };
  var leimma3 = {
  	alternateCodepoint: "U+1D08C",
  	codepoint: "U+E0E2"
  };
  var leimma4 = {
  	alternateCodepoint: "U+1D08D",
  	codepoint: "U+E0E3"
  };
  var leimmaDot = {
  	codepoint: "U+E0E4"
  };
  var gorgonAbove = {
  	alternateCodepoint: "U+1D08F",
  	codepoint: "U+E0F0"
  };
  var gorgonBelow = {
  	alternateCodepoint: "U+1D0F5",
  	codepoint: "U+E0F1"
  };
  var gorgonDottedLeft = {
  	alternateCodepoint: "U+1D090",
  	codepoint: "U+E0F2"
  };
  var gorgonDottedRight = {
  	alternateCodepoint: "U+1D091",
  	codepoint: "U+E0F3"
  };
  var digorgon = {
  	alternateCodepoint: "U+1D092",
  	codepoint: "U+E0F4"
  };
  var digorgonDottedLeftBelow = {
  	alternateCodepoint: "U+1D093",
  	codepoint: "U+E0F5"
  };
  var digorgonDottedLeftAbove = {
  	alternateCodepoint: "U+1D094",
  	codepoint: "U+E0F6"
  };
  var digorgonDottedRight = {
  	alternateCodepoint: "U+1D095",
  	codepoint: "U+E0F7"
  };
  var trigorgon = {
  	alternateCodepoint: "U+1D096",
  	codepoint: "U+E0F8"
  };
  var trigorgonDottedLeftBelow = {
  	codepoint: "U+E0F9"
  };
  var trigorgonDottedLeftAbove = {
  	codepoint: "U+E0FA"
  };
  var trigorgonDottedRight = {
  	codepoint: "U+E0FB"
  };
  var argon = {
  	alternateCodepoint: "U+1D097",
  	codepoint: "U+E0FC"
  };
  var diargon = {
  	alternateCodepoint: "U+1D098",
  	codepoint: "U+E0FD"
  };
  var triargon = {
  	alternateCodepoint: "U+1D099",
  	codepoint: "U+E0FE"
  };
  var gorgonSecondary = {
  	codepoint: "U+E100"
  };
  var gorgonDottedLeftSecondary = {
  	codepoint: "U+E101"
  };
  var gorgonDottedRightSecondary = {
  	codepoint: "U+E102"
  };
  var digorgonSecondary = {
  	codepoint: "U+E103"
  };
  var digorgonDottedLeftBelowSecondary = {
  	codepoint: "U+E104"
  };
  var digorgonDottedRightSecondary = {
  	codepoint: "U+E105"
  };
  var trigorgonSecondary = {
  	codepoint: "U+E106"
  };
  var trigorgonDottedLeftBelowSecondary = {
  	codepoint: "U+E107"
  };
  var trigorgonDottedRightSecondary = {
  	codepoint: "U+E108"
  };
  var digorgonDottedLeftSecondary = {
  	codepoint: "U+E109"
  };
  var trigorgonDottedLeftSecondary = {
  	codepoint: "U+E10A"
  };
  var agogiPoliArgi = {
  	alternateCodepoint: "U+1D09A",
  	codepoint: "U+E120"
  };
  var agogiArgoteri = {
  	alternateCodepoint: "U+1D09B",
  	codepoint: "U+E121"
  };
  var agogiArgi = {
  	alternateCodepoint: "U+1D09C",
  	codepoint: "U+E122"
  };
  var agogiMetria = {
  	alternateCodepoint: "U+1D09D",
  	codepoint: "U+E123"
  };
  var agogiMesi = {
  	alternateCodepoint: "U+1D09E",
  	codepoint: "U+E124"
  };
  var agogiGorgi = {
  	alternateCodepoint: "U+1D09F",
  	codepoint: "U+E125"
  };
  var agogiGorgoteri = {
  	alternateCodepoint: "U+1D0A0",
  	codepoint: "U+E126"
  };
  var agogiPoliGorgi = {
  	alternateCodepoint: "U+1D0A1",
  	codepoint: "U+E127"
  };
  var agogiPoliArgiAbove = {
  	alternateCodepoint: "U+1D09A",
  	codepoint: "U+E128"
  };
  var agogiArgoteriAbove = {
  	alternateCodepoint: "U+1D09B",
  	codepoint: "U+E129"
  };
  var agogiArgiAbove = {
  	alternateCodepoint: "U+1D09C",
  	codepoint: "U+E12A"
  };
  var agogiMetriaAbove = {
  	alternateCodepoint: "U+1D09D",
  	codepoint: "U+E12B"
  };
  var agogiMesiAbove = {
  	alternateCodepoint: "U+1D09E",
  	codepoint: "U+E12C"
  };
  var agogiGorgiAbove = {
  	alternateCodepoint: "U+1D09F",
  	codepoint: "U+E12D"
  };
  var agogiGorgoteriAbove = {
  	alternateCodepoint: "U+1D0A0",
  	codepoint: "U+E12E"
  };
  var agogiPoliGorgiAbove = {
  	alternateCodepoint: "U+1D0A1",
  	codepoint: "U+E12F"
  };
  var martyriaNoteZoLow = {
  	codepoint: "U+E130"
  };
  var martyriaNoteNiLow = {
  	codepoint: "U+E131"
  };
  var martyriaNotePaLow = {
  	codepoint: "U+E132"
  };
  var martyriaNoteVouLow = {
  	codepoint: "U+E133"
  };
  var martyriaNoteGaLow = {
  	codepoint: "U+E134"
  };
  var martyriaNoteDiLow = {
  	codepoint: "U+E135"
  };
  var martyriaNoteKeLow = {
  	codepoint: "U+E136"
  };
  var martyriaNoteZo = {
  	codepoint: "U+E137"
  };
  var martyriaNoteNi = {
  	codepoint: "U+E138"
  };
  var martyriaNotePa = {
  	codepoint: "U+E139"
  };
  var martyriaNoteVou = {
  	codepoint: "U+E13A"
  };
  var martyriaNoteGa = {
  	codepoint: "U+E13B"
  };
  var martyriaNoteDi = {
  	codepoint: "U+E13C"
  };
  var martyriaNoteKe = {
  	codepoint: "U+E13D"
  };
  var martyriaNoteZoHigh = {
  	codepoint: "U+E13E"
  };
  var martyriaNoteNiHigh = {
  	codepoint: "U+E13F"
  };
  var martyriaNotePaHigh = {
  	codepoint: "U+E140"
  };
  var martyriaNoteVouHigh = {
  	codepoint: "U+E141"
  };
  var martyriaNoteGaHigh = {
  	codepoint: "U+E142"
  };
  var martyriaNoteDiHigh = {
  	codepoint: "U+E143"
  };
  var martyriaNoteKeHigh = {
  	codepoint: "U+E144"
  };
  var martyriaTick = {
  	codepoint: "U+E145"
  };
  var martyriaZoBelow = {
  	codepoint: "U+E150"
  };
  var martyriaDeltaBelow = {
  	codepoint: "U+E151"
  };
  var martyriaAlphaBelow = {
  	codepoint: "U+E152"
  };
  var martyriaLegetosBelow = {
  	codepoint: "U+E153"
  };
  var martyriaNanaBelow = {
  	codepoint: "U+E154"
  };
  var martyriaDeltaDottedBelow = {
  	codepoint: "U+E155"
  };
  var martyriaAlphaDottedBelow = {
  	codepoint: "U+E156"
  };
  var martyriaHardChromaticPaBelow = {
  	codepoint: "U+E157"
  };
  var martyriaHardChromaticDiBelow = {
  	codepoint: "U+E158"
  };
  var martyriaSoftChromaticDiBelow = {
  	codepoint: "U+E159"
  };
  var martyriaSoftChromaticKeBelow = {
  	codepoint: "U+E15A"
  };
  var martyriaZygosBelow = {
  	codepoint: "U+E15B"
  };
  var martyriaZoAbove = {
  	codepoint: "U+E170"
  };
  var martyriaDeltaAbove = {
  	codepoint: "U+E171"
  };
  var martyriaAlphaAbove = {
  	codepoint: "U+E172"
  };
  var martyriaLegetosAbove = {
  	codepoint: "U+E173"
  };
  var martyriaNanaAbove = {
  	codepoint: "U+E174"
  };
  var martyriaDeltaDottedAbove = {
  	codepoint: "U+E175"
  };
  var martyriaAlphaDottedAbove = {
  	codepoint: "U+E176"
  };
  var martyriaHardChromaticPaAbove = {
  	codepoint: "U+E177"
  };
  var martyriaHardChromaticDiAbove = {
  	codepoint: "U+E178"
  };
  var martyriaSoftChromaticDiAbove = {
  	codepoint: "U+E179"
  };
  var martyriaSoftChromaticKeAbove = {
  	codepoint: "U+E17A"
  };
  var martyriaZygosAbove = {
  	codepoint: "U+E17B"
  };
  var fthoraDiatonicNiLowAbove = {
  	codepoint: "U+E190"
  };
  var fthoraDiatonicPaAbove = {
  	codepoint: "U+E191"
  };
  var fthoraDiatonicVouAbove = {
  	codepoint: "U+E192"
  };
  var fthoraDiatonicGaAbove = {
  	codepoint: "U+E193"
  };
  var fthoraDiatonicDiAbove = {
  	codepoint: "U+E194"
  };
  var fthoraDiatonicKeAbove = {
  	codepoint: "U+E195"
  };
  var fthoraDiatonicZoAbove = {
  	codepoint: "U+E196"
  };
  var fthoraDiatonicNiHighAbove = {
  	codepoint: "U+E197"
  };
  var fthoraHardChromaticPaAbove = {
  	codepoint: "U+E198"
  };
  var fthoraHardChromaticDiAbove = {
  	codepoint: "U+E199"
  };
  var fthoraSoftChromaticDiAbove = {
  	codepoint: "U+E19A"
  };
  var fthoraSoftChromaticKeAbove = {
  	codepoint: "U+E19B"
  };
  var fthoraEnharmonicAbove = {
  	codepoint: "U+E19C"
  };
  var chroaZygosAbove = {
  	codepoint: "U+E19D"
  };
  var chroaKlitonAbove = {
  	codepoint: "U+E19E"
  };
  var chroaSpathiAbove = {
  	codepoint: "U+E19F"
  };
  var fthoraDiatonicNiLowSecondary = {
  	codepoint: "U+E1A0"
  };
  var fthoraDiatonicPaSecondary = {
  	codepoint: "U+E1A1"
  };
  var fthoraDiatonicVouSecondary = {
  	codepoint: "U+E1A2"
  };
  var fthoraDiatonicGaSecondary = {
  	codepoint: "U+E1A3"
  };
  var fthoraDiatonicDiSecondary = {
  	codepoint: "U+E1A4"
  };
  var fthoraDiatonicKeSecondary = {
  	codepoint: "U+E1A5"
  };
  var fthoraDiatonicZoSecondary = {
  	codepoint: "U+E1A6"
  };
  var fthoraDiatonicNiHighSecondary = {
  	codepoint: "U+E1A7"
  };
  var fthoraHardChromaticPaSecondary = {
  	codepoint: "U+E1A8"
  };
  var fthoraHardChromaticDiSecondary = {
  	codepoint: "U+E1A9"
  };
  var fthoraSoftChromaticDiSecondary = {
  	codepoint: "U+E1AA"
  };
  var fthoraSoftChromaticKeSecondary = {
  	codepoint: "U+E1AB"
  };
  var fthoraEnharmonicSecondary = {
  	codepoint: "U+E1AC"
  };
  var chroaZygosSecondary = {
  	codepoint: "U+E1AD"
  };
  var chroaKlitonSecondary = {
  	codepoint: "U+E1AE"
  };
  var chroaSpathiSecondary = {
  	codepoint: "U+E1AF"
  };
  var fthoraDiatonicNiLowTertiary = {
  	codepoint: "U+E1B0"
  };
  var fthoraDiatonicPaTertiary = {
  	codepoint: "U+E1B1"
  };
  var fthoraDiatonicVouTertiary = {
  	codepoint: "U+E1B2"
  };
  var fthoraDiatonicGaTertiary = {
  	codepoint: "U+E1B3"
  };
  var fthoraDiatonicDiTertiary = {
  	codepoint: "U+E1B4"
  };
  var fthoraDiatonicKeTertiary = {
  	codepoint: "U+E1B5"
  };
  var fthoraDiatonicZoTertiary = {
  	codepoint: "U+E1B6"
  };
  var fthoraDiatonicNiHighTertiary = {
  	codepoint: "U+E1B7"
  };
  var fthoraHardChromaticPaTertiary = {
  	codepoint: "U+E1B8"
  };
  var fthoraHardChromaticDiTertiary = {
  	codepoint: "U+E1B9"
  };
  var fthoraSoftChromaticDiTertiary = {
  	codepoint: "U+E1BA"
  };
  var fthoraSoftChromaticKeTertiary = {
  	codepoint: "U+E1BB"
  };
  var fthoraEnharmonicTertiary = {
  	codepoint: "U+E1BC"
  };
  var chroaZygosTertiary = {
  	codepoint: "U+E1BD"
  };
  var chroaKlitonTertiary = {
  	codepoint: "U+E1BE"
  };
  var chroaSpathiTertiary = {
  	codepoint: "U+E1BF"
  };
  var fthoraDiatonicNiLowBelow = {
  	codepoint: "U+E1C0"
  };
  var fthoraDiatonicPaBelow = {
  	codepoint: "U+E1C1"
  };
  var fthoraDiatonicVouBelow = {
  	codepoint: "U+E1C2"
  };
  var fthoraDiatonicGaBelow = {
  	codepoint: "U+E1C3"
  };
  var fthoraDiatonicDiBelow = {
  	codepoint: "U+E1C4"
  };
  var fthoraDiatonicKeBelow = {
  	codepoint: "U+E1C5"
  };
  var fthoraDiatonicZoBelow = {
  	codepoint: "U+E1C6"
  };
  var fthoraDiatonicNiHighBelow = {
  	codepoint: "U+E1C7"
  };
  var fthoraHardChromaticPaBelow = {
  	codepoint: "U+E1C8"
  };
  var fthoraHardChromaticDiBelow = {
  	codepoint: "U+E1C9"
  };
  var fthoraSoftChromaticDiBelow = {
  	codepoint: "U+E1CA"
  };
  var fthoraSoftChromaticKeBelow = {
  	codepoint: "U+E1CB"
  };
  var fthoraEnharmonicBelow = {
  	codepoint: "U+E1CC"
  };
  var chroaZygosBelow = {
  	codepoint: "U+E1CD"
  };
  var chroaKlitonBelow = {
  	codepoint: "U+E1CE"
  };
  var chroaSpathiBelow = {
  	codepoint: "U+E1CF"
  };
  var diesis2 = {
  	alternateCodepoint: "U+1D0D0",
  	codepoint: "U+E1F0"
  };
  var diesis4 = {
  	alternateCodepoint: "U+1D0D1",
  	codepoint: "U+E1F1"
  };
  var diesis6 = {
  	alternateCodepoint: "U+1D0D2",
  	codepoint: "U+E1F2"
  };
  var diesis8 = {
  	alternateCodepoint: "U+1D0D3",
  	codepoint: "U+E1F3"
  };
  var diesisGenikiAbove = {
  	codepoint: "U+E1F4"
  };
  var diesisGenikiBelow = {
  	codepoint: "U+E1F5"
  };
  var diesis2Secondary = {
  	codepoint: "U+E1F6"
  };
  var diesis4Secondary = {
  	codepoint: "U+E1F7"
  };
  var diesis6Secondary = {
  	codepoint: "U+E1F8"
  };
  var diesis8Secondary = {
  	codepoint: "U+E1F9"
  };
  var diesis2Tertiary = {
  	codepoint: "U+E1FA"
  };
  var diesis4Tertiary = {
  	codepoint: "U+E1FB"
  };
  var diesis6Tertiary = {
  	codepoint: "U+E1FC"
  };
  var diesis8Tertiary = {
  	codepoint: "U+E1FD"
  };
  var diesisGenikiSecondary = {
  	codepoint: "U+E1FE"
  };
  var diesisGenikiTertiary = {
  	codepoint: "U+E1FF"
  };
  var yfesis2 = {
  	alternateCodepoint: "U+1D0D4",
  	codepoint: "U+E200"
  };
  var yfesis4 = {
  	alternateCodepoint: "U+1D0D5",
  	codepoint: "U+E201"
  };
  var yfesis6 = {
  	alternateCodepoint: "U+1D0D6",
  	codepoint: "U+E202"
  };
  var yfesis8 = {
  	alternateCodepoint: "U+1D0D7",
  	codepoint: "U+E203"
  };
  var yfesisGenikiAbove = {
  	codepoint: "U+E204"
  };
  var yfesisGenikiBelow = {
  	codepoint: "U+E205"
  };
  var yfesis2Secondary = {
  	codepoint: "U+E206"
  };
  var yfesis4Secondary = {
  	codepoint: "U+E207"
  };
  var yfesis6Secondary = {
  	codepoint: "U+E208"
  };
  var yfesis8Secondary = {
  	codepoint: "U+E209"
  };
  var yfesis2Tertiary = {
  	codepoint: "U+E20A"
  };
  var yfesis4Tertiary = {
  	codepoint: "U+E20B"
  };
  var yfesis6Tertiary = {
  	codepoint: "U+E20C"
  };
  var yfesis8Tertiary = {
  	codepoint: "U+E20D"
  };
  var yfesisGenikiSecondary = {
  	codepoint: "U+E20E"
  };
  var yfesisGenikiTertiary = {
  	codepoint: "U+E20F"
  };
  var barlineSingle = {
  	alternateCodepoint: "U+1D0DB",
  	codepoint: "U+E210"
  };
  var barlineDouble = {
  	codepoint: "U+E211"
  };
  var barlineTheseos = {
  	codepoint: "U+E212"
  };
  var barlineShortSingle = {
  	alternateCodepoint: "U+1D0DA",
  	codepoint: "U+E213"
  };
  var barlineShortDouble = {
  	alternateCodepoint: "U+1D0DC",
  	codepoint: "U+E214"
  };
  var barlineShortTheseos = {
  	alternateCodepoint: "U+1D0DD",
  	codepoint: "U+E215"
  };
  var barlineSingleAbove = {
  	codepoint: "U+E216"
  };
  var barlineDoubleAbove = {
  	codepoint: "U+E217"
  };
  var barlineTheseosAbove = {
  	codepoint: "U+E218"
  };
  var barlineShortSingleAbove = {
  	codepoint: "U+E219"
  };
  var barlineShortDoubleAbove = {
  	codepoint: "U+E21A"
  };
  var barlineShortTheseosAbove = {
  	codepoint: "U+E21B"
  };
  var measureNumber2 = {
  	codepoint: "U+E220"
  };
  var measureNumber3 = {
  	codepoint: "U+E221"
  };
  var measureNumber4 = {
  	codepoint: "U+E222"
  };
  var measureNumber5 = {
  	codepoint: "U+E223"
  };
  var measureNumber6 = {
  	codepoint: "U+E224"
  };
  var measureNumber7 = {
  	codepoint: "U+E225"
  };
  var measureNumber8 = {
  	codepoint: "U+E226"
  };
  var noteIndicatorNi = {
  	codepoint: "U+E250"
  };
  var noteIndicatorPa = {
  	codepoint: "U+E251"
  };
  var noteIndicatorVou = {
  	codepoint: "U+E252"
  };
  var noteIndicatorGa = {
  	codepoint: "U+E253"
  };
  var noteIndicatorDi = {
  	codepoint: "U+E254"
  };
  var noteIndicatorKe = {
  	codepoint: "U+E255"
  };
  var noteIndicatorZo = {
  	codepoint: "U+E256"
  };
  var isonIndicatorUnison = {
  	codepoint: "U+E260"
  };
  var isonIndicatorDiLow = {
  	codepoint: "U+E261"
  };
  var isonIndicatorKeLow = {
  	codepoint: "U+E262"
  };
  var isonIndicatorZo = {
  	codepoint: "U+E263"
  };
  var isonIndicatorNi = {
  	codepoint: "U+E264"
  };
  var isonIndicatorPa = {
  	codepoint: "U+E265"
  };
  var isonIndicatorVou = {
  	codepoint: "U+E266"
  };
  var isonIndicatorGa = {
  	codepoint: "U+E267"
  };
  var isonIndicatorDi = {
  	codepoint: "U+E268"
  };
  var isonIndicatorKe = {
  	codepoint: "U+E269"
  };
  var isonIndicatorZoHigh = {
  	codepoint: "U+E26A"
  };
  var gorthmikon = {
  	alternateCodepoint: "U+1D0B5",
  	codepoint: "U+E280"
  };
  var pelastikon = {
  	alternateCodepoint: "U+1D0B4",
  	codepoint: "U+E281"
  };
  var modeFirst = {
  	codepoint: "U+E2A0"
  };
  var modeSecond = {
  	codepoint: "U+E2A8"
  };
  var modeThird = {
  	codepoint: "U+E2B0"
  };
  var modeThirdNana = {
  	alternateCodepoint: "U+1D0A7",
  	codepoint: "U+E2B1"
  };
  var modeFourth = {
  	codepoint: "U+E2B8"
  };
  var modeLegetos = {
  	alternateCodepoint: "U+1D0AA",
  	codepoint: "U+E2BA"
  };
  var modePlagalFirst = {
  	codepoint: "U+E2C0"
  };
  var modePlagalSecond = {
  	codepoint: "U+E2C8"
  };
  var modeVarys = {
  	alternateCodepoint: "U+1D0B1",
  	codepoint: "U+E2D0"
  };
  var modeVarys2 = {
  	codepoint: "U+E2D1"
  };
  var modePlagalFourth = {
  	codepoint: "U+E2D8"
  };
  var modeNi = {
  	codepoint: "U+E2E0"
  };
  var modePa = {
  	codepoint: "U+E2E1"
  };
  var modeVou = {
  	codepoint: "U+E2E2"
  };
  var modeGa = {
  	codepoint: "U+E2E3"
  };
  var modeDi = {
  	codepoint: "U+E2E4"
  };
  var modeKe = {
  	codepoint: "U+E2E5"
  };
  var modeZo = {
  	codepoint: "U+E2E6"
  };
  var modeOligonKentimaAbove = {
  	codepoint: "U+E2E7"
  };
  var modeOligonYpsili = {
  	codepoint: "U+E2E8"
  };
  var modeElafron = {
  	codepoint: "U+E2E9"
  };
  var modeRunningElafron = {
  	codepoint: "U+E2EA"
  };
  var modePlagal = {
  	alternateCodepoint: "U+1D0AB",
  	codepoint: "U+E2F0"
  };
  var modeWordEchos = {
  	codepoint: "U+E2F1"
  };
  var modeWordVarys = {
  	codepoint: "U+E2F2"
  };
  var modeAlpha = {
  	codepoint: "U+E2F3"
  };
  var modeBeta = {
  	codepoint: "U+E2F4"
  };
  var modeGamma = {
  	codepoint: "U+E2F5"
  };
  var modeDelta = {
  	codepoint: "U+E2F6"
  };
  var modeAlphaCapital = {
  	codepoint: "U+E2F7"
  };
  var modeBetaCapital = {
  	codepoint: "U+E2F8"
  };
  var modeGammaCapital = {
  	codepoint: "U+E2F9"
  };
  var modeDeltaCapital = {
  	codepoint: "U+E2FA"
  };
  var glyphnames = {
  	ison: ison,
  	oligon: oligon,
  	oligonKentimaMiddle: oligonKentimaMiddle,
  	oligonKentimaBelow: oligonKentimaBelow,
  	oligonKentimaAbove: oligonKentimaAbove,
  	oligonYpsiliRight: oligonYpsiliRight,
  	oligonYpsiliLeft: oligonYpsiliLeft,
  	oligonKentimaYpsiliRight: oligonKentimaYpsiliRight,
  	oligonKentimaYpsiliMiddle: oligonKentimaYpsiliMiddle,
  	oligonDoubleYpsili: oligonDoubleYpsili,
  	oligonKentimataDoubleYpsili: oligonKentimataDoubleYpsili,
  	oligonKentimaDoubleYpsiliRight: oligonKentimaDoubleYpsiliRight,
  	oligonKentimaDoubleYpsiliLeft: oligonKentimaDoubleYpsiliLeft,
  	oligonTripleYpsili: oligonTripleYpsili,
  	oligonKentimataTripleYpsili: oligonKentimataTripleYpsili,
  	oligonKentimaTripleYpsili: oligonKentimaTripleYpsili,
  	oligonIson: oligonIson,
  	oligonApostrofos: oligonApostrofos,
  	oligonYporroi: oligonYporroi,
  	oligonElafron: oligonElafron,
  	oligonElafronApostrofos: oligonElafronApostrofos,
  	oligonChamili: oligonChamili,
  	isonApostrofos: isonApostrofos,
  	apostrofos: apostrofos,
  	apostrofosSyndesmos: apostrofosSyndesmos,
  	yporroi: yporroi,
  	elafron: elafron,
  	runningElafron: runningElafron,
  	elafronApostrofos: elafronApostrofos,
  	chamili: chamili,
  	chamiliApostrofos: chamiliApostrofos,
  	chamiliElafron: chamiliElafron,
  	chamiliElafronApostrofos: chamiliElafronApostrofos,
  	doubleChamili: doubleChamili,
  	doubleChamiliApostrofos: doubleChamiliApostrofos,
  	doubleChamiliElafron: doubleChamiliElafron,
  	doubleChamiliElafronApostrofos: doubleChamiliElafronApostrofos,
  	tripleChamili: tripleChamili,
  	petastiIson: petastiIson,
  	petasti: petasti,
  	petastiOligon: petastiOligon,
  	petastiKentima: petastiKentima,
  	petastiYpsiliRight: petastiYpsiliRight,
  	petastiYpsiliLeft: petastiYpsiliLeft,
  	petastiKentimaYpsiliRight: petastiKentimaYpsiliRight,
  	petastiKentimaYpsiliMiddle: petastiKentimaYpsiliMiddle,
  	petastiDoubleYpsili: petastiDoubleYpsili,
  	petastiKentimataDoubleYpsili: petastiKentimataDoubleYpsili,
  	petastiKentimaDoubleYpsiliRight: petastiKentimaDoubleYpsiliRight,
  	petastiKentimaDoubleYpsiliLeft: petastiKentimaDoubleYpsiliLeft,
  	petastiTripleYpsili: petastiTripleYpsili,
  	petastiKentimataTripleYpsili: petastiKentimataTripleYpsili,
  	petastiKentimaTripleYpsili: petastiKentimaTripleYpsili,
  	petastiApostrofos: petastiApostrofos,
  	petastiYporroi: petastiYporroi,
  	petastiElafron: petastiElafron,
  	petastiRunningElafron: petastiRunningElafron,
  	petastiElafronApostrofos: petastiElafronApostrofos,
  	petastiChamili: petastiChamili,
  	petastiChamiliApostrofos: petastiChamiliApostrofos,
  	petastiChamiliElafron: petastiChamiliElafron,
  	petastiChamiliElafronApostrofos: petastiChamiliElafronApostrofos,
  	petastiDoubleChamili: petastiDoubleChamili,
  	petastiDoubleChamiliApostrofos: petastiDoubleChamiliApostrofos,
  	kentima: kentima,
  	kentimata: kentimata,
  	oligonKentimataBelow: oligonKentimataBelow,
  	oligonKentimataAbove: oligonKentimataAbove,
  	oligonIsonKentimata: oligonIsonKentimata,
  	oligonKentimaMiddleKentimata: oligonKentimaMiddleKentimata,
  	oligonYpsiliRightKentimata: oligonYpsiliRightKentimata,
  	oligonYpsiliLeftKentimata: oligonYpsiliLeftKentimata,
  	oligonApostrofosKentimata: oligonApostrofosKentimata,
  	oligonYporroiKentimata: oligonYporroiKentimata,
  	oligonElafronKentimata: oligonElafronKentimata,
  	oligonRunningElafronKentimata: oligonRunningElafronKentimata,
  	oligonElafronApostrofosKentimata: oligonElafronApostrofosKentimata,
  	oligonChamiliKentimata: oligonChamiliKentimata,
  	vareia: vareia,
  	psifiston: psifiston,
  	antikenoma: antikenoma,
  	omalon: omalon,
  	omalonConnecting: omalonConnecting,
  	heteron: heteron,
  	heteronConnecting: heteronConnecting,
  	endofonon: endofonon,
  	yfenAbove: yfenAbove,
  	yfenBelow: yfenBelow,
  	stavros: stavros,
  	breath: breath,
  	stavrosAbove: stavrosAbove,
  	klasmaAbove: klasmaAbove,
  	klasmaBelow: klasmaBelow,
  	apli: apli,
  	dipli: dipli,
  	tripli: tripli,
  	tetrapli: tetrapli,
  	koronis: koronis,
  	leimma1: leimma1,
  	leimma2: leimma2,
  	leimma3: leimma3,
  	leimma4: leimma4,
  	leimmaDot: leimmaDot,
  	gorgonAbove: gorgonAbove,
  	gorgonBelow: gorgonBelow,
  	gorgonDottedLeft: gorgonDottedLeft,
  	gorgonDottedRight: gorgonDottedRight,
  	digorgon: digorgon,
  	digorgonDottedLeftBelow: digorgonDottedLeftBelow,
  	digorgonDottedLeftAbove: digorgonDottedLeftAbove,
  	digorgonDottedRight: digorgonDottedRight,
  	trigorgon: trigorgon,
  	trigorgonDottedLeftBelow: trigorgonDottedLeftBelow,
  	trigorgonDottedLeftAbove: trigorgonDottedLeftAbove,
  	trigorgonDottedRight: trigorgonDottedRight,
  	argon: argon,
  	diargon: diargon,
  	triargon: triargon,
  	gorgonSecondary: gorgonSecondary,
  	gorgonDottedLeftSecondary: gorgonDottedLeftSecondary,
  	gorgonDottedRightSecondary: gorgonDottedRightSecondary,
  	digorgonSecondary: digorgonSecondary,
  	digorgonDottedLeftBelowSecondary: digorgonDottedLeftBelowSecondary,
  	digorgonDottedRightSecondary: digorgonDottedRightSecondary,
  	trigorgonSecondary: trigorgonSecondary,
  	trigorgonDottedLeftBelowSecondary: trigorgonDottedLeftBelowSecondary,
  	trigorgonDottedRightSecondary: trigorgonDottedRightSecondary,
  	digorgonDottedLeftSecondary: digorgonDottedLeftSecondary,
  	trigorgonDottedLeftSecondary: trigorgonDottedLeftSecondary,
  	agogiPoliArgi: agogiPoliArgi,
  	agogiArgoteri: agogiArgoteri,
  	agogiArgi: agogiArgi,
  	agogiMetria: agogiMetria,
  	agogiMesi: agogiMesi,
  	agogiGorgi: agogiGorgi,
  	agogiGorgoteri: agogiGorgoteri,
  	agogiPoliGorgi: agogiPoliGorgi,
  	agogiPoliArgiAbove: agogiPoliArgiAbove,
  	agogiArgoteriAbove: agogiArgoteriAbove,
  	agogiArgiAbove: agogiArgiAbove,
  	agogiMetriaAbove: agogiMetriaAbove,
  	agogiMesiAbove: agogiMesiAbove,
  	agogiGorgiAbove: agogiGorgiAbove,
  	agogiGorgoteriAbove: agogiGorgoteriAbove,
  	agogiPoliGorgiAbove: agogiPoliGorgiAbove,
  	martyriaNoteZoLow: martyriaNoteZoLow,
  	martyriaNoteNiLow: martyriaNoteNiLow,
  	martyriaNotePaLow: martyriaNotePaLow,
  	martyriaNoteVouLow: martyriaNoteVouLow,
  	martyriaNoteGaLow: martyriaNoteGaLow,
  	martyriaNoteDiLow: martyriaNoteDiLow,
  	martyriaNoteKeLow: martyriaNoteKeLow,
  	martyriaNoteZo: martyriaNoteZo,
  	martyriaNoteNi: martyriaNoteNi,
  	martyriaNotePa: martyriaNotePa,
  	martyriaNoteVou: martyriaNoteVou,
  	martyriaNoteGa: martyriaNoteGa,
  	martyriaNoteDi: martyriaNoteDi,
  	martyriaNoteKe: martyriaNoteKe,
  	martyriaNoteZoHigh: martyriaNoteZoHigh,
  	martyriaNoteNiHigh: martyriaNoteNiHigh,
  	martyriaNotePaHigh: martyriaNotePaHigh,
  	martyriaNoteVouHigh: martyriaNoteVouHigh,
  	martyriaNoteGaHigh: martyriaNoteGaHigh,
  	martyriaNoteDiHigh: martyriaNoteDiHigh,
  	martyriaNoteKeHigh: martyriaNoteKeHigh,
  	martyriaTick: martyriaTick,
  	martyriaZoBelow: martyriaZoBelow,
  	martyriaDeltaBelow: martyriaDeltaBelow,
  	martyriaAlphaBelow: martyriaAlphaBelow,
  	martyriaLegetosBelow: martyriaLegetosBelow,
  	martyriaNanaBelow: martyriaNanaBelow,
  	martyriaDeltaDottedBelow: martyriaDeltaDottedBelow,
  	martyriaAlphaDottedBelow: martyriaAlphaDottedBelow,
  	martyriaHardChromaticPaBelow: martyriaHardChromaticPaBelow,
  	martyriaHardChromaticDiBelow: martyriaHardChromaticDiBelow,
  	martyriaSoftChromaticDiBelow: martyriaSoftChromaticDiBelow,
  	martyriaSoftChromaticKeBelow: martyriaSoftChromaticKeBelow,
  	martyriaZygosBelow: martyriaZygosBelow,
  	martyriaZoAbove: martyriaZoAbove,
  	martyriaDeltaAbove: martyriaDeltaAbove,
  	martyriaAlphaAbove: martyriaAlphaAbove,
  	martyriaLegetosAbove: martyriaLegetosAbove,
  	martyriaNanaAbove: martyriaNanaAbove,
  	martyriaDeltaDottedAbove: martyriaDeltaDottedAbove,
  	martyriaAlphaDottedAbove: martyriaAlphaDottedAbove,
  	martyriaHardChromaticPaAbove: martyriaHardChromaticPaAbove,
  	martyriaHardChromaticDiAbove: martyriaHardChromaticDiAbove,
  	martyriaSoftChromaticDiAbove: martyriaSoftChromaticDiAbove,
  	martyriaSoftChromaticKeAbove: martyriaSoftChromaticKeAbove,
  	martyriaZygosAbove: martyriaZygosAbove,
  	fthoraDiatonicNiLowAbove: fthoraDiatonicNiLowAbove,
  	fthoraDiatonicPaAbove: fthoraDiatonicPaAbove,
  	fthoraDiatonicVouAbove: fthoraDiatonicVouAbove,
  	fthoraDiatonicGaAbove: fthoraDiatonicGaAbove,
  	fthoraDiatonicDiAbove: fthoraDiatonicDiAbove,
  	fthoraDiatonicKeAbove: fthoraDiatonicKeAbove,
  	fthoraDiatonicZoAbove: fthoraDiatonicZoAbove,
  	fthoraDiatonicNiHighAbove: fthoraDiatonicNiHighAbove,
  	fthoraHardChromaticPaAbove: fthoraHardChromaticPaAbove,
  	fthoraHardChromaticDiAbove: fthoraHardChromaticDiAbove,
  	fthoraSoftChromaticDiAbove: fthoraSoftChromaticDiAbove,
  	fthoraSoftChromaticKeAbove: fthoraSoftChromaticKeAbove,
  	fthoraEnharmonicAbove: fthoraEnharmonicAbove,
  	chroaZygosAbove: chroaZygosAbove,
  	chroaKlitonAbove: chroaKlitonAbove,
  	chroaSpathiAbove: chroaSpathiAbove,
  	fthoraDiatonicNiLowSecondary: fthoraDiatonicNiLowSecondary,
  	fthoraDiatonicPaSecondary: fthoraDiatonicPaSecondary,
  	fthoraDiatonicVouSecondary: fthoraDiatonicVouSecondary,
  	fthoraDiatonicGaSecondary: fthoraDiatonicGaSecondary,
  	fthoraDiatonicDiSecondary: fthoraDiatonicDiSecondary,
  	fthoraDiatonicKeSecondary: fthoraDiatonicKeSecondary,
  	fthoraDiatonicZoSecondary: fthoraDiatonicZoSecondary,
  	fthoraDiatonicNiHighSecondary: fthoraDiatonicNiHighSecondary,
  	fthoraHardChromaticPaSecondary: fthoraHardChromaticPaSecondary,
  	fthoraHardChromaticDiSecondary: fthoraHardChromaticDiSecondary,
  	fthoraSoftChromaticDiSecondary: fthoraSoftChromaticDiSecondary,
  	fthoraSoftChromaticKeSecondary: fthoraSoftChromaticKeSecondary,
  	fthoraEnharmonicSecondary: fthoraEnharmonicSecondary,
  	chroaZygosSecondary: chroaZygosSecondary,
  	chroaKlitonSecondary: chroaKlitonSecondary,
  	chroaSpathiSecondary: chroaSpathiSecondary,
  	fthoraDiatonicNiLowTertiary: fthoraDiatonicNiLowTertiary,
  	fthoraDiatonicPaTertiary: fthoraDiatonicPaTertiary,
  	fthoraDiatonicVouTertiary: fthoraDiatonicVouTertiary,
  	fthoraDiatonicGaTertiary: fthoraDiatonicGaTertiary,
  	fthoraDiatonicDiTertiary: fthoraDiatonicDiTertiary,
  	fthoraDiatonicKeTertiary: fthoraDiatonicKeTertiary,
  	fthoraDiatonicZoTertiary: fthoraDiatonicZoTertiary,
  	fthoraDiatonicNiHighTertiary: fthoraDiatonicNiHighTertiary,
  	fthoraHardChromaticPaTertiary: fthoraHardChromaticPaTertiary,
  	fthoraHardChromaticDiTertiary: fthoraHardChromaticDiTertiary,
  	fthoraSoftChromaticDiTertiary: fthoraSoftChromaticDiTertiary,
  	fthoraSoftChromaticKeTertiary: fthoraSoftChromaticKeTertiary,
  	fthoraEnharmonicTertiary: fthoraEnharmonicTertiary,
  	chroaZygosTertiary: chroaZygosTertiary,
  	chroaKlitonTertiary: chroaKlitonTertiary,
  	chroaSpathiTertiary: chroaSpathiTertiary,
  	fthoraDiatonicNiLowBelow: fthoraDiatonicNiLowBelow,
  	fthoraDiatonicPaBelow: fthoraDiatonicPaBelow,
  	fthoraDiatonicVouBelow: fthoraDiatonicVouBelow,
  	fthoraDiatonicGaBelow: fthoraDiatonicGaBelow,
  	fthoraDiatonicDiBelow: fthoraDiatonicDiBelow,
  	fthoraDiatonicKeBelow: fthoraDiatonicKeBelow,
  	fthoraDiatonicZoBelow: fthoraDiatonicZoBelow,
  	fthoraDiatonicNiHighBelow: fthoraDiatonicNiHighBelow,
  	fthoraHardChromaticPaBelow: fthoraHardChromaticPaBelow,
  	fthoraHardChromaticDiBelow: fthoraHardChromaticDiBelow,
  	fthoraSoftChromaticDiBelow: fthoraSoftChromaticDiBelow,
  	fthoraSoftChromaticKeBelow: fthoraSoftChromaticKeBelow,
  	fthoraEnharmonicBelow: fthoraEnharmonicBelow,
  	chroaZygosBelow: chroaZygosBelow,
  	chroaKlitonBelow: chroaKlitonBelow,
  	chroaSpathiBelow: chroaSpathiBelow,
  	diesis2: diesis2,
  	diesis4: diesis4,
  	diesis6: diesis6,
  	diesis8: diesis8,
  	diesisGenikiAbove: diesisGenikiAbove,
  	diesisGenikiBelow: diesisGenikiBelow,
  	diesis2Secondary: diesis2Secondary,
  	diesis4Secondary: diesis4Secondary,
  	diesis6Secondary: diesis6Secondary,
  	diesis8Secondary: diesis8Secondary,
  	diesis2Tertiary: diesis2Tertiary,
  	diesis4Tertiary: diesis4Tertiary,
  	diesis6Tertiary: diesis6Tertiary,
  	diesis8Tertiary: diesis8Tertiary,
  	diesisGenikiSecondary: diesisGenikiSecondary,
  	diesisGenikiTertiary: diesisGenikiTertiary,
  	yfesis2: yfesis2,
  	yfesis4: yfesis4,
  	yfesis6: yfesis6,
  	yfesis8: yfesis8,
  	yfesisGenikiAbove: yfesisGenikiAbove,
  	yfesisGenikiBelow: yfesisGenikiBelow,
  	yfesis2Secondary: yfesis2Secondary,
  	yfesis4Secondary: yfesis4Secondary,
  	yfesis6Secondary: yfesis6Secondary,
  	yfesis8Secondary: yfesis8Secondary,
  	yfesis2Tertiary: yfesis2Tertiary,
  	yfesis4Tertiary: yfesis4Tertiary,
  	yfesis6Tertiary: yfesis6Tertiary,
  	yfesis8Tertiary: yfesis8Tertiary,
  	yfesisGenikiSecondary: yfesisGenikiSecondary,
  	yfesisGenikiTertiary: yfesisGenikiTertiary,
  	barlineSingle: barlineSingle,
  	barlineDouble: barlineDouble,
  	barlineTheseos: barlineTheseos,
  	barlineShortSingle: barlineShortSingle,
  	barlineShortDouble: barlineShortDouble,
  	barlineShortTheseos: barlineShortTheseos,
  	barlineSingleAbove: barlineSingleAbove,
  	barlineDoubleAbove: barlineDoubleAbove,
  	barlineTheseosAbove: barlineTheseosAbove,
  	barlineShortSingleAbove: barlineShortSingleAbove,
  	barlineShortDoubleAbove: barlineShortDoubleAbove,
  	barlineShortTheseosAbove: barlineShortTheseosAbove,
  	measureNumber2: measureNumber2,
  	measureNumber3: measureNumber3,
  	measureNumber4: measureNumber4,
  	measureNumber5: measureNumber5,
  	measureNumber6: measureNumber6,
  	measureNumber7: measureNumber7,
  	measureNumber8: measureNumber8,
  	noteIndicatorNi: noteIndicatorNi,
  	noteIndicatorPa: noteIndicatorPa,
  	noteIndicatorVou: noteIndicatorVou,
  	noteIndicatorGa: noteIndicatorGa,
  	noteIndicatorDi: noteIndicatorDi,
  	noteIndicatorKe: noteIndicatorKe,
  	noteIndicatorZo: noteIndicatorZo,
  	isonIndicatorUnison: isonIndicatorUnison,
  	isonIndicatorDiLow: isonIndicatorDiLow,
  	isonIndicatorKeLow: isonIndicatorKeLow,
  	isonIndicatorZo: isonIndicatorZo,
  	isonIndicatorNi: isonIndicatorNi,
  	isonIndicatorPa: isonIndicatorPa,
  	isonIndicatorVou: isonIndicatorVou,
  	isonIndicatorGa: isonIndicatorGa,
  	isonIndicatorDi: isonIndicatorDi,
  	isonIndicatorKe: isonIndicatorKe,
  	isonIndicatorZoHigh: isonIndicatorZoHigh,
  	gorthmikon: gorthmikon,
  	pelastikon: pelastikon,
  	modeFirst: modeFirst,
  	modeSecond: modeSecond,
  	modeThird: modeThird,
  	modeThirdNana: modeThirdNana,
  	modeFourth: modeFourth,
  	modeLegetos: modeLegetos,
  	modePlagalFirst: modePlagalFirst,
  	modePlagalSecond: modePlagalSecond,
  	modeVarys: modeVarys,
  	modeVarys2: modeVarys2,
  	modePlagalFourth: modePlagalFourth,
  	modeNi: modeNi,
  	modePa: modePa,
  	modeVou: modeVou,
  	modeGa: modeGa,
  	modeDi: modeDi,
  	modeKe: modeKe,
  	modeZo: modeZo,
  	modeOligonKentimaAbove: modeOligonKentimaAbove,
  	modeOligonYpsili: modeOligonYpsili,
  	modeElafron: modeElafron,
  	modeRunningElafron: modeRunningElafron,
  	modePlagal: modePlagal,
  	modeWordEchos: modeWordEchos,
  	modeWordVarys: modeWordVarys,
  	modeAlpha: modeAlpha,
  	modeBeta: modeBeta,
  	modeGamma: modeGamma,
  	modeDelta: modeDelta,
  	modeAlphaCapital: modeAlphaCapital,
  	modeBetaCapital: modeBetaCapital,
  	modeGammaCapital: modeGammaCapital,
  	modeDeltaCapital: modeDeltaCapital
  };

  class NeumeMappingService {
    constructor() {
      this.glyphNameToCodepointMap = new Map();

      this.initMap();
    }

    getMapping(neume) {
      return this.glyphNameToCodepointMap.get(neume);
    }

    initMap() {
      for (let glyph in glyphnames) {
        const data = glyphnames[glyph];
        const codepoint = Number('0x' + data.codepoint.substring(2));
        this.glyphNameToCodepointMap.set(glyph, String.fromCodePoint(codepoint));
      }

      // TODO hard-coding optional glyphs
      // This is okay for now since Neanes is the only SBMuFL font

      this.glyphNameToCodepointMap.set(
        'oligonKentimataBelow.alt01',
        String.fromCodePoint(0xf000),
      );

      this.glyphNameToCodepointMap.set(
        'oligonKentimataAbove.alt01',
        String.fromCodePoint(0xf001),
      );

      this.glyphNameToCodepointMap.set(
        'antikenoma.alt01',
        String.fromCodePoint(0xf002),
      );

      this.glyphNameToCodepointMap.set(
        'modeFirst.salt01',
        String.fromCodePoint(0xf003),
      );

      this.glyphNameToCodepointMap.set(
        'modeFourth.salt01',
        String.fromCodePoint(0xf004),
      );

      this.glyphNameToCodepointMap.set(
        'oligonKentimataBelow.alt02',
        String.fromCodePoint(0xf005),
      );

      this.glyphNameToCodepointMap.set(
        'psifiston.salt01',
        String.fromCodePoint(0xf006),
      );

      this.glyphNameToCodepointMap.set(
        'heteronConnecting.salt01',
        String.fromCodePoint(0xf007),
      );

      this.glyphNameToCodepointMap.set(
        'psifiston.alt01',
        String.fromCodePoint(0xf008),
      );
    }
  }

  class FontService {
    constructor() {
      this.fontFamilyMetadataMap = new Map();
    }

    loadMap(fontFamily, metadata) {
      this.fontFamilyMetadataMap.set(fontFamily, metadata);
    }

    getMetadata(fontFamily) {
      return this.fontFamilyMetadataMap.get(fontFamily);
    }

    getAdvanceWidth(fontFamily, glyph) {
      return this.getMetadata(fontFamily).glyphAdvanceWidths[glyph];
    }

    getMarkOffset(fontFamily, base, mark) {
      const metadata = this.getMetadata(fontFamily);

      if (!metadata) {
        console.error(
          `FontService.getMarkOffset: no metadata loaded for font family "${fontFamily}"`,
        );

        return;
      }

      const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
        (x) => metadata.glyphsWithAnchors[base][x] != null,
      );

      if (markAnchorName == null) {
        console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
        return { x: 0, y: 0 };
      }

      const markAnchor = metadata.glyphsWithAnchors[mark][markAnchorName];

      const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

      return {
        x: baseAnchor[0] - markAnchor[0],
        y: -(baseAnchor[1] - markAnchor[1]),
      };
    }

    // Not needed right now, but could be useful later
    // getMarkAnchorOffset(fontFamily, base, mark) {
    //   const metadata = this.getMetadata(fontFamily);

    //   if (!metadata) {
    //     console.error(
    //       `FontService.getMarkAnchorOffset: no metadata loaded for font family "${fontFamily}"`,
    //     );
    //   }

    //   const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
    //     (x) => metadata.glyphsWithAnchors[base][x] != null,
    //   );

    //   if (markAnchorName == null) {
    //     console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
    //     return { x: 0, y: 0 };
    //   }

    //   const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

    //   return {
    //     x: baseAnchor[0],
    //     y: metadata.metrics.winAscent - baseAnchor[1],
    //   };
    // }
  }

  const CssVars = {
    LyricFontFamily: '--byz-lyric-font-family',
    LyricFontSize: '--byz-lyric-font-size',
    LyricOffsetHorizontal: '--byz-lyric-offset-h',
    LyricOffsetVertical: '--byz-lyric-offset-v',

    NeumeFontFamily: '--byz-neume-font-family',
    NeumeFontSize: '--byz-neume-font-size',

    DropCapFontFamily: '--byz-drop-cap-font-family',
    DropCapFontSize: '--byz-drop-cap-font-size',
    DropCapColor: '--byz-drop-cap-color',
    DropCapOffsetVertical: '--byz-drop-cap-offset-v',

    SpacerWidthVareia: '--byz-spacer-width-vareia',
    SpacerWidthApostrofos: '--byz-spacer-width-apostrofos',

    ColorAccidental: '--byz-color-accidental',
    ColorAgogi: '--byz-color-agogi',
    ColorBarline: '--byz-color-barline',
    ColorFthora: '--byz-color-fthora',
    ColorGorgon: '--byz-color-gorgon',
    ColorHeteron: '--byz-color-heteron',
    ColorIsonIndicator: '--byz-color-ison-indicator',
    ColorKoronis: '--byz-color-koronis',
    ColorMartyria: '--byz-color-martyria',
    ColorMeasureNumber: '--byz-color-measure-number',
    ColorNoteIndicator: '--byz-color-note-indicator',
  };

  class TextMetrics {
    static canvas;
    static cache = new Map();
    static metricCache = new Map();

    static getContext() {
      const canvas = this.canvas || document.createElement('canvas');
      this.canvas = canvas;

      return canvas.getContext('2d');
    }

    static getTextWidth(text, font) {
      const context = TextMetrics.getContext();
      context.font = font;
      const metrics = context.measureText(text);
      return metrics.width;
    }

    static getTextWidthFromCache(text, font) {
      const key = `${text} | ${font}`;

      let width = TextMetrics.cache.get(key);

      if (width == null) {
        width = TextMetrics.getTextWidth(text, font);

        TextMetrics.cache.set(key, width);
      }

      return width;
    }

    static getFontBoundingBoxDescentFromCache(font) {
      const key = `fontBoundingBoxDescent | ${font}`;

      let descent = TextMetrics.metricCache.get(key);

      if (descent == null) {
        const context = TextMetrics.getContext();
        context.font = font;

        const metrics = context.measureText('M');
        descent =
          metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent ?? 0;

        TextMetrics.metricCache.set(key, descent);
      }

      return descent;
    }

    static getFontHeight(font) {
      const key = `fontHeight | ${font}`;

      let height = TextMetrics.metricCache.get(key);

      if (height == null) {
        const context = this.getContext();

        context.font = font;
        const metrics = context.measureText('M');

        height =
          metrics.fontBoundingBoxAscent != null &&
          metrics.fontBoundingBoxDescent != null
            ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
            : metrics.actualBoundingBoxAscent != null &&
                metrics.actualBoundingBoxDescent != null
              ? metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
              : 0;

        TextMetrics.metricCache.set(key, height);
      }

      return height;
    }
  }

  const TATWEEL = '\u0640';

  function isElementInOrNearViewport(el) {
    const rect = el.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= -viewportHeight &&
      rect.left >= -viewportWidth &&
      rect.bottom <= viewportHeight * 2 &&
      rect.right <= viewportWidth * 2
    );
  }

  function binarySearch(melismas) {
    let start = 0;
    let end = melismas.length - 1;
    let currentIndex;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    while (start <= end) {
      currentIndex = Math.floor((start + end) / 2);
      const rect = melismas[currentIndex].getBoundingClientRect();

      if (rect.top < 0) {
        start = currentIndex + 1;
      } else if (rect.bottom > viewportHeight) {
        end = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }

    return -1;
  }

  function processAutoMelisma(melisma) {
    let change;
    const parentNote = melisma.closest('x-note, x-n');
    const siblingLyrics = parentNote.querySelector('x-lyric, x-ly');
    const siblingLyricsRect = siblingLyrics.getBoundingClientRect();

    let nextNote = parentNote.nextElementSibling;
    let nextLyrics;
    let depth = 0;
    let melismaWidth;
    let lastNoteRight;

    while (
      nextNote &&
      (nextNote.nodeName === 'X-NOTE' || nextNote.nodeName === 'X-N') &&
      depth < 100
    ) {
      nextLyrics = nextNote.querySelector('x-lyric, x-ly');

      const nextNoteRect = nextNote.getBoundingClientRect();

      if (
        nextNoteRect.left < siblingLyricsRect.left &&
        lastNoteRight !== undefined
      ) {
        // We have wrapped around. Extend the melisma to the end of the last note
        // that was on the same line
        melismaWidth = lastNoteRight - siblingLyricsRect.right;
        break;
      }

      if (nextLyrics) {
        // We've found lyrics. Extend the melisma to the start of the lyrics.
        const nextLyricsRect = nextLyrics.getBoundingClientRect();

        melismaWidth = nextLyricsRect.left - siblingLyricsRect.right;
        break;
      }

      lastNoteRight = nextNoteRect.right;
      nextNote = nextNote.nextElementSibling;

      depth++;
    }

    if (melismaWidth) {
      change = { melisma };

      const melismaStyle = getComputedStyle(melisma);
      const fontFamily = melismaStyle.getPropertyValue(CssVars.LyricFontFamily);
      const fontSize = melismaStyle.getPropertyValue(CssVars.LyricFontSize);
      const font = `${fontSize} ${fontFamily}`;

      let text = '';

      if (melisma.hasAttribute('hyphen') || melisma.hasAttribute('h')) {
        const widthOfHyphen = TextMetrics.getTextWidthFromCache('-', font);

        text = '-';

        change.right = `${melismaWidth / 2 + widthOfHyphen / 2}px`;
      } else {
        change.width = `${melismaWidth}px`;
        change.top = `${-TextMetrics.getFontBoundingBoxDescentFromCache(font)}px`;
        change.height = `${TextMetrics.getFontHeight(font)}px`;
        change.borderMelisma = true;
      }

      change.textContent = text;
    }

    return change;
  }

  function processAutoMelismaRtl(melisma) {
    let change;
    const parentNote = melisma.closest('x-note, x-n');
    const siblingLyrics = parentNote.querySelector('x-lyric, x-ly');
    const siblingLyricsRect = siblingLyrics.getBoundingClientRect();

    let nextNote = parentNote.nextElementSibling;
    let nextLyrics;
    let depth = 0;
    let melismaWidth;
    let lastNoteLeft;

    while (
      nextNote &&
      (nextNote.nodeName === 'X-NOTE' || nextNote.nodeName === 'X-N') &&
      depth < 100
    ) {
      nextLyrics = nextNote.querySelector('x-lyric, x-ly');

      const nextNoteRect = nextNote.getBoundingClientRect();

      if (lastNoteLeft < nextNoteRect.left && lastNoteLeft !== undefined) {
        // We have wrapped around. Extend the melisma to the end of the last note
        // that was on the same line
        melismaWidth = siblingLyricsRect.left - lastNoteLeft;
        break;
      }

      if (nextLyrics && nextLyrics.innerText != TATWEEL) {
        // We've found lyrics. Extend the melisma to the start of the lyrics.
        const nextLyricsRect = nextLyrics.getBoundingClientRect();

        melismaWidth = siblingLyricsRect.left - nextLyricsRect.right;

        break;
      }

      lastNoteLeft = nextNoteRect.left;
      nextNote = nextNote.nextElementSibling;

      depth++;
    }

    if (melismaWidth) {
      change = { melisma };

      const melismaStyle = getComputedStyle(melisma);
      const fontFamily = melismaStyle.getPropertyValue(CssVars.LyricFontFamily);
      const fontSize = melismaStyle.getPropertyValue(CssVars.LyricFontSize);
      const font = `${fontSize} ${fontFamily}`;

      let text = '';

      const widthOfTatweel = TextMetrics.getTextWidthFromCache(TATWEEL, font);

      const numberOfTatweelsNeeded = Math.ceil(melismaWidth / widthOfTatweel);

      for (let i = 0; i < numberOfTatweelsNeeded; i++) {
        text += TATWEEL;
      }

      change.width = `${melismaWidth}px`;

      change.textContent = text;
    } else {
      console.log('zero width');
    }
    return change;
  }

  function processAutoMelismas() {
    const melismas = document.querySelectorAll(
      'x-melisma[auto], x-mel[auto], x-melisma[a], x-mel[a]',
    );
    const melismasInViewPort = [];

    const changes = [];

    // Find all visible elements

    // Binary search to find an element in the viewport.
    // Assume elements are arranged top to bottom
    const currentIndex = binarySearch(melismas);

    // If an element was found, search before and after the element
    // to find all elements in the viewport
    if (currentIndex !== -1) {
      for (let i = currentIndex; i < melismas.length; i++) {
        if (isElementInOrNearViewport(melismas[i])) {
          melismasInViewPort.push(melismas[i]);
        } else {
          break;
        }
      }

      for (let i = currentIndex; i >= 0; i--) {
        if (isElementInOrNearViewport(melismas[i])) {
          melismasInViewPort.push(melismas[i]);
        } else {
          break;
        }
      }
    }

    // Calculate the changes
    for (let melisma of melismasInViewPort) {
      let change = byzhtml.options.melkiteRtl
        ? processAutoMelismaRtl(melisma)
        : processAutoMelisma(melisma);

      if (change) {
        changes.push(change);
      }
    }

    // Apply changes
    for (let change of changes) {
      change.melisma.textContent = change.textContent;

      if (change.width != null) {
        change.melisma.setAttribute('width', change.width);
      }

      if (change.right != null) {
        change.melisma.setAttribute('right', change.right);
      }

      if (change.top != null) {
        change.melisma.setAttribute('top', change.top);
      }

      if (change.height != null) {
        change.melisma.setAttribute('height', change.height);
      }

      if (change.borderMelisma) {
        change.melisma.setAttribute('border', '');
      } else {
        change.melisma.removeAttribute('border');
      }
    }
  }

  const neumeMappingService = new NeumeMappingService();
  const fontService = new FontService();
  const options = {
    useWebkitPositioning: false,
    melkiteRtl: false,
  };

  var byzhtml = {
    neumeMappingService,
    fontService,
    options,
    processAutoMelismas,
  };

  class Martyria extends HTMLElement {
    constructor(glyphname) {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
      <style>        
        :host {
          position: relative;
          display: inline-block;
          text-align: left;
        }
      </style>
      <span>
          <slot></slot>
      </span>
    `;
    }
  }

  class Neume extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'font-family'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      if (!this.hasAttribute('name')) {
        console.error('Neume: Missing attribute "name"');
        return;
      }

      const content = byzhtml.neumeMappingService.getMapping(
        this.getAttribute('name'),
      );

      let saltStyle = '';
      let fontFamily = `var(${CssVars.NeumeFontFamily})`;

      if (this.hasAttribute('font-family')) {
        fontFamily = this.getAttribute('font-family');
      }

      if (this.hasAttribute('salt')) {
        saltStyle = `font-feature-settings: 'salt' ${this.getAttribute('salt')};`;
      }

      this.shadowRoot.innerHTML = `<span style="font-family: ${fontFamily}; font-size: var(${CssVars.NeumeFontSize}); ${saltStyle}">${content}</span>`;
    }
  }

  class Note extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
      <style>${this.getStyleInnerHtml()}</style>
      <span class="group">
          <div class="neume-group">
            <slot></slot>
          </div>
          <div class="lyrics-container">
            <slot name="lyric"></slot>
            <slot name="melisma"></slot>
          </div>
      </span>
    `;
    }

    getStyleInnerHtml(lyricsPaddingLeft) {
      return `
        :host {
          position: relative;
          display: inline-block;
        }

        .group {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .neume-group {
          position: relative;
          text-align: left;
        }

        .lyrics-container {
          display: flex;
          margin-top: var(${CssVars.LyricOffsetVertical});
          ${lyricsPaddingLeft}
        }
    `;
    }

    vareiaConnectedCallback() {
      this.shadowRoot.querySelector('style').innerHTML = this.getStyleInnerHtml(
        `padding-left: calc(var(${CssVars.SpacerWidthVareia}) * var(${CssVars.NeumeFontSize}));`,
      );
    }

    runningElafronConnectedCallback() {
      this.shadowRoot.querySelector('style').innerHTML = this.getStyleInnerHtml(
        `padding-left: calc(var(${CssVars.SpacerWidthApostrofos}) * var(${CssVars.NeumeFontSize}));`,
      );
    }
  }

  class Spacer extends HTMLElement {
    static get observedAttributes() {
      return ['width'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      if (!this.hasAttribute('width')) {
        console.error('Neume: Missing attribute "width"');
      }

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          line-height: 0;
          width: ${this.getAttribute('width')};
        }
      </style>`;
    }
  }

  class SpacerApostrofos extends HTMLElement {
    static get observedAttributes() {
      return ['font-family', 'font-size'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let fontFamily = `var(${CssVars.NeumeFontFamily})`;
      let fontSize = `var(${CssVars.NeumeFontSize})`;

      if (this.hasAttribute('font-family')) {
        fontFamily = this.getAttribute('font-family');
      }

      if (this.hasAttribute('font-size')) {
        fontSize = this.getAttribute('font-size');
      }

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(${CssVars.SpacerWidthApostrofos});
          font-family: ${fontFamily};
          font-size: ${fontSize};
        }
      </style>`;
    }
  }

  class SpacerVareia extends HTMLElement {
    static get observedAttributes() {
      return ['font-family', 'font-size'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let fontFamily = `var(${CssVars.NeumeFontFamily})`;
      let fontSize = `var(${CssVars.NeumeFontSize})`;

      if (this.hasAttribute('font-family')) {
        fontFamily = this.getAttribute('font-family');
      }

      if (this.hasAttribute('font-size')) {
        fontSize = this.getAttribute('font-size');
      }

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(${CssVars.SpacerWidthVareia});
          font-family: ${fontFamily};
          font-size: ${fontSize};
        }
      </style>`;
    }
  }

  class DropCap extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          line-height: 0;
          top: var(${CssVars.DropCapOffsetVertical});
          color: var(${CssVars.DropCapColor});
          font-size: var(${CssVars.DropCapFontSize});
          font-family: var(${CssVars.DropCapFontFamily});
        }
      </style>
      <span><slot></slot></span>`;
    }
  }

  class Lyric extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<span style="font-family: var(${CssVars.LyricFontFamily}); font-size: var(${CssVars.LyricFontSize}); margin: 0 var(${CssVars.LyricOffsetHorizontal});"><slot></slot></span>`;
    }

    connectedCallback() {
      const parentNote = this.closest('x-note, x-n');

      if (parentNote) {
        this.slot = 'lyric';
      }
    }
  }

  class Melisma extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'right', 'top', 'height', 'border'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const parentNote = this.closest('x-note, x-n');

      if (parentNote) {
        this.slot = 'melisma';
      }

      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let width = '';
      let paddingLeft = '';
      let top = '';
      let height = '';
      let borderBottom = '';

      if (this.hasAttribute('width')) {
        width = `width: ${this.getAttribute('width')};`;
      }

      if (this.hasAttribute('right')) {
        paddingLeft = `padding-left: ${this.getAttribute('right')};`;
      }

      if (this.hasAttribute('border') && this.hasAttribute('top')) {
        top = `transform: translateY(${this.getAttribute('top')});`;
      }

      if (this.hasAttribute('border') && this.hasAttribute('height')) {
        height = `height: ${this.getAttribute('height')};`;
      }

      if (this.hasAttribute('border')) {
        borderBottom = `border-bottom: 1px solid currentColor;`;
      }

      // Border-based melismas need a small extra horizontal nudge so the line
      // starts cleanly against the lyric offset instead of tucking under it.
      const marginLeft = this.hasAttribute('border')
        ? `calc(-1* var(--byz-lyric-offset-h) + 2px)`
        : `calc(-1* var(--byz-lyric-offset-h))`;

      this.shadowRoot.innerHTML = `
    <style>
        .melisma {
          position: absolute;
        display: inline-flex;
        overflow: hidden!important;
        white-space: pre;
        font-family: var(${CssVars.LyricFontFamily});
        font-size: var(${CssVars.LyricFontSize});
        margin-left: ${marginLeft};
        ${width}
        ${paddingLeft}
        ${borderBottom}
        ${top}
        ${height}
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
    }
  }

  class BaseBody extends HTMLElement {
    static get observedAttributes() {
      return ['font-family'];
    }

    constructor(glyphname, args) {
      super();

      this.glyphname = glyphname;
      this.args = args;

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let fontFamilyAttr = '';
      let saltAttr = '';

      if (this.hasAttribute('font-family')) {
        fontFamilyAttr = `font-family="${this.getAttribute('font-family')}"`;
      }

      if (this.hasAttribute('salt')) {
        saltAttr = `salt="${this.getAttribute('salt')}"`;
      }

      let otherStyles = '';

      if (this.args) {
        if (this.args.color) {
          otherStyles += ` color: var(${this.args.color});`;
        }
      }

      this.shadowRoot.innerHTML = `<style>:host { font-size: var(${CssVars.NeumeFontSize} );${otherStyles}}</style><x-neume name="${this.glyphname}" ${fontFamilyAttr} ${saltAttr}></x-neume>`;
    }
  }

  const glyphname$5C = 'ison';
  const args$5C = {};

  class Ison extends BaseBody {
    constructor() {
      super(glyphname$5C, args$5C);
    }
  }

  const glyphname$5B = 'oligon';
  const args$5B = {};

  class Oligon extends BaseBody {
    constructor() {
      super(glyphname$5B, args$5B);
    }
  }

  const glyphname$5A = 'oligonKentimaMiddle';
  const args$5A = {};

  class OligonKentimaMiddle extends BaseBody {
    constructor() {
      super(glyphname$5A, args$5A);
    }
  }

  const glyphname$5z = 'oligonKentimaBelow';
  const args$5z = {};

  class OligonKentimaBelow extends BaseBody {
    constructor() {
      super(glyphname$5z, args$5z);
    }
  }

  const glyphname$5y = 'oligonKentimaAbove';
  const args$5y = {};

  class OligonKentimaAbove extends BaseBody {
    constructor() {
      super(glyphname$5y, args$5y);
    }
  }

  const glyphname$5x = 'oligonYpsiliRight';
  const args$5x = {};

  class OligonYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$5x, args$5x);
    }
  }

  const glyphname$5w = 'oligonYpsiliLeft';
  const args$5w = {};

  class OligonYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$5w, args$5w);
    }
  }

  const glyphname$5v = 'oligonKentimaYpsiliRight';
  const args$5v = {};

  class OligonKentimaYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$5v, args$5v);
    }
  }

  const glyphname$5u = 'oligonKentimaYpsiliMiddle';
  const args$5u = {};

  class OligonKentimaYpsiliMiddle extends BaseBody {
    constructor() {
      super(glyphname$5u, args$5u);
    }
  }

  const glyphname$5t = 'oligonDoubleYpsili';
  const args$5t = {};

  class OligonDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$5t, args$5t);
    }
  }

  const glyphname$5s = 'oligonKentimataDoubleYpsili';
  const args$5s = {};

  class OligonKentimataDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$5s, args$5s);
    }
  }

  const glyphname$5r = 'oligonKentimaDoubleYpsiliRight';
  const args$5r = {};

  class OligonKentimaDoubleYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$5r, args$5r);
    }
  }

  const glyphname$5q = 'oligonKentimaDoubleYpsiliLeft';
  const args$5q = {};

  class OligonKentimaDoubleYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$5q, args$5q);
    }
  }

  const glyphname$5p = 'oligonTripleYpsili';
  const args$5p = {};

  class OligonTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$5p, args$5p);
    }
  }

  const glyphname$5o = 'oligonKentimataTripleYpsili';
  const args$5o = {};

  class OligonKentimataTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$5o, args$5o);
    }
  }

  const glyphname$5n = 'oligonKentimaTripleYpsili';
  const args$5n = {};

  class OligonKentimaTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$5n, args$5n);
    }
  }

  const glyphname$5m = 'oligonIson';
  const args$5m = {};

  class OligonIson extends BaseBody {
    constructor() {
      super(glyphname$5m, args$5m);
    }
  }

  const glyphname$5l = 'oligonApostrofos';
  const args$5l = {};

  class OligonApostrofos extends BaseBody {
    constructor() {
      super(glyphname$5l, args$5l);
    }
  }

  const glyphname$5k = 'oligonYporroi';
  const args$5k = {};

  class OligonYporroi extends BaseBody {
    constructor() {
      super(glyphname$5k, args$5k);
    }
  }

  const glyphname$5j = 'oligonElafron';
  const args$5j = {};

  class OligonElafron extends BaseBody {
    constructor() {
      super(glyphname$5j, args$5j);
    }
  }

  const glyphname$5i = 'oligonElafronApostrofos';
  const args$5i = {};

  class OligonElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$5i, args$5i);
    }
  }

  const glyphname$5h = 'oligonChamili';
  const args$5h = {};

  class OligonChamili extends BaseBody {
    constructor() {
      super(glyphname$5h, args$5h);
    }
  }

  const glyphname$5g = 'isonApostrofos';
  const args$5g = {};

  class IsonApostrofos extends BaseBody {
    constructor() {
      super(glyphname$5g, args$5g);
    }
  }

  const glyphname$5f = 'apostrofos';
  const args$5f = {};

  class Apostrofos extends BaseBody {
    constructor() {
      super(glyphname$5f, args$5f);
    }
  }

  const glyphname$5e = 'apostrofosSyndesmos';
  const args$5e = {};

  class ApostrofosSyndesmos extends BaseBody {
    constructor() {
      super(glyphname$5e, args$5e);
    }
  }

  const glyphname$5d = 'yporroi';
  const args$5d = {};

  class Yporroi extends BaseBody {
    constructor() {
      super(glyphname$5d, args$5d);
    }
  }

  const glyphname$5c = 'elafron';
  const args$5c = {};

  class Elafron extends BaseBody {
    constructor() {
      super(glyphname$5c, args$5c);
    }
  }

  const glyphname$5b = 'runningElafron';
  const args$5b = {};

  class RunningElafron extends BaseBody {
    constructor() {
      super(glyphname$5b, args$5b);
    }

    connectedCallback() {
      super.connectedCallback();

      if (
        this.parentElement &&
        this.parentElement.runningElafronConnectedCallback
      ) {
        this.parentElement.runningElafronConnectedCallback();
      }
    }
  }

  const glyphname$5a = 'elafronApostrofos';
  const args$5a = {};

  class ElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$5a, args$5a);
    }
  }

  const glyphname$59 = 'chamili';
  const args$59 = {};

  class Chamili extends BaseBody {
    constructor() {
      super(glyphname$59, args$59);
    }
  }

  const glyphname$58 = 'chamiliApostrofos';
  const args$58 = {};

  class ChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$58, args$58);
    }
  }

  const glyphname$57 = 'chamiliElafron';
  const args$57 = {};

  class ChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$57, args$57);
    }
  }

  const glyphname$56 = 'chamiliElafronApostrofos';
  const args$56 = {};

  class ChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$56, args$56);
    }
  }

  const glyphname$55 = 'doubleChamili';
  const args$55 = {};

  class DoubleChamili extends BaseBody {
    constructor() {
      super(glyphname$55, args$55);
    }
  }

  const glyphname$54 = 'doubleChamiliApostrofos';
  const args$54 = {};

  class DoubleChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$54, args$54);
    }
  }

  const glyphname$53 = 'doubleChamiliElafron';
  const args$53 = {};

  class DoubleChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$53, args$53);
    }
  }

  const glyphname$52 = 'doubleChamiliElafronApostrofos';
  const args$52 = {};

  class DoubleChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$52, args$52);
    }
  }

  const glyphname$51 = 'tripleChamili';
  const args$51 = {};

  class TripleChamili extends BaseBody {
    constructor() {
      super(glyphname$51, args$51);
    }
  }

  const glyphname$50 = 'petastiIson';
  const args$50 = {};

  class PetastiIson extends BaseBody {
    constructor() {
      super(glyphname$50, args$50);
    }
  }

  const glyphname$4$ = 'petasti';
  const args$4$ = {};

  class Petasti extends BaseBody {
    constructor() {
      super(glyphname$4$, args$4$);
    }
  }

  const glyphname$4_ = 'petastiOligon';
  const args$4_ = {};

  class PetastiOligon extends BaseBody {
    constructor() {
      super(glyphname$4_, args$4_);
    }
  }

  const glyphname$4Z = 'petastiKentima';
  const args$4Z = {};

  class PetastiKentima extends BaseBody {
    constructor() {
      super(glyphname$4Z, args$4Z);
    }
  }

  const glyphname$4Y = 'petastiYpsiliRight';
  const args$4Y = {};

  class PetastiYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4Y, args$4Y);
    }
  }

  const glyphname$4X = 'petastiYpsiliLeft';
  const args$4X = {};

  class PetastiYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$4X, args$4X);
    }
  }

  const glyphname$4W = 'petastiKentimaYpsiliRight';
  const args$4W = {};

  class PetastiKentimaYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4W, args$4W);
    }
  }

  const glyphname$4V = 'petastiKentimaYpsiliMiddle';
  const args$4V = {};

  class PetastiKentimaYpsiliMiddle extends BaseBody {
    constructor() {
      super(glyphname$4V, args$4V);
    }
  }

  const glyphname$4U = 'petastiDoubleYpsili';
  const args$4U = {};

  class PetastiDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4U, args$4U);
    }
  }

  const glyphname$4T = 'petastiKentimataDoubleYpsili';
  const args$4T = {};

  class PetastiKentimataDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4T, args$4T);
    }
  }

  const glyphname$4S = 'petastiKentimaDoubleYpsiliRight';
  const args$4S = {};

  class PetastiKentimaDoubleYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4S, args$4S);
    }
  }

  const glyphname$4R = 'petastiKentimaDoubleYpsiliLeft';
  const args$4R = {};

  class PetastiKentimaDoubleYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$4R, args$4R);
    }
  }

  const glyphname$4Q = 'petastiTripleYpsili';
  const args$4Q = {};

  class PetastiTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4Q, args$4Q);
    }
  }

  const glyphname$4P = 'petastiKentimataTripleYpsili';
  const args$4P = {};

  class PetastiKentimataTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4P, args$4P);
    }
  }

  const glyphname$4O = 'petastiKentimaTripleYpsili';
  const args$4O = {};

  class PetastiKentimaTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4O, args$4O);
    }
  }

  const glyphname$4N = 'petastiApostrofos';
  const args$4N = {};

  class PetastiApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4N, args$4N);
    }
  }

  const glyphname$4M = 'petastiYporroi';
  const args$4M = {};

  class PetastiYporroi extends BaseBody {
    constructor() {
      super(glyphname$4M, args$4M);
    }
  }

  const glyphname$4L = 'petastiElafron';
  const args$4L = {};

  class PetastiElafron extends BaseBody {
    constructor() {
      super(glyphname$4L, args$4L);
    }
  }

  const glyphname$4K = 'petastiRunningElafron';
  const args$4K = {};

  class PetastiRunningElafron extends BaseBody {
    constructor() {
      super(glyphname$4K, args$4K);
    }

    connectedCallback() {
      super.connectedCallback();

      if (
        this.parentElement &&
        this.parentElement.runningElafronConnectedCallback
      ) {
        this.parentElement.runningElafronConnectedCallback();
      }
    }
  }

  const glyphname$4J = 'petastiElafronApostrofos';
  const args$4J = {};

  class PetastiElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4J, args$4J);
    }
  }

  const glyphname$4I = 'petastiChamili';
  const args$4I = {};

  class PetastiChamili extends BaseBody {
    constructor() {
      super(glyphname$4I, args$4I);
    }
  }

  const glyphname$4H = 'petastiChamiliApostrofos';
  const args$4H = {};

  class PetastiChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4H, args$4H);
    }
  }

  const glyphname$4G = 'petastiChamiliElafron';
  const args$4G = {};

  class PetastiChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$4G, args$4G);
    }
  }

  const glyphname$4F = 'petastiChamiliElafronApostrofos';
  const args$4F = {};

  class PetastiChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4F, args$4F);
    }
  }

  const glyphname$4E = 'petastiDoubleChamili';
  const args$4E = {};

  class PetastiDoubleChamili extends BaseBody {
    constructor() {
      super(glyphname$4E, args$4E);
    }
  }

  const glyphname$4D = 'petastiDoubleChamiliApostrofos';
  const args$4D = {};

  class PetastiDoubleChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4D, args$4D);
    }
  }

  const glyphname$4C = 'kentima';
  const args$4C = {};

  class Kentima extends BaseBody {
    constructor() {
      super(glyphname$4C, args$4C);
    }
  }

  const glyphname$4B = 'kentimata';
  const args$4B = {};

  class Kentimata extends BaseBody {
    constructor() {
      super(glyphname$4B, args$4B);
    }
  }

  const glyphname$4A = 'oligonKentimataBelow';
  const args$4A = {};

  const MAX_SEARCH_DEPTH$2 = 100;

  class OligonKentimataBelow extends BaseBody {
    constructor() {
      super(glyphname$4A, args$4A);

      // If using webkit positioning, perform a
      // contextual substitution when combined with the psifiston
      if (byzhtml.options.useWebkitPositioning) {
        let nextSibling = this.nextElementSibling;
        let depth = 0;

        while (nextSibling && depth <= MAX_SEARCH_DEPTH$2) {
          if (!nextSibling.nodeName.startsWith('X-')) {
            break;
          }

          if (nextSibling.nodeName.startsWith('X-PSI')) {
            this.glyphname = 'oligonKentimataBelow.alt01';
            break;
          }

          nextSibling = nextSibling.nextElementSibling;

          // Paranoia. Don't want an infinite loop;
          depth++;
        }
      }
    }
  }

  const glyphname$4z = 'oligonKentimataAbove';
  const args$4z = {};

  class OligonKentimataAbove extends BaseBody {
    constructor() {
      super(glyphname$4z, args$4z);
    }
  }

  const glyphname$4y = 'oligonIsonKentimata';
  const args$4y = {};

  class OligonIsonKentimata extends BaseBody {
    constructor() {
      super(glyphname$4y, args$4y);
    }
  }

  const glyphname$4x = 'oligonKentimaMiddleKentimata';
  const args$4x = {};

  class OligonKentimaMiddleKentimata extends BaseBody {
    constructor() {
      super(glyphname$4x, args$4x);
    }
  }

  const glyphname$4w = 'oligonYpsiliRightKentimata';
  const args$4w = {};

  class OligonYpsiliRightKentimata extends BaseBody {
    constructor() {
      super(glyphname$4w, args$4w);
    }
  }

  const glyphname$4v = 'oligonYpsiliLeftKentimata';
  const args$4v = {};

  class OligonYpsiliLeftKentimata extends BaseBody {
    constructor() {
      super(glyphname$4v, args$4v);
    }
  }

  const glyphname$4u = 'oligonApostrofosKentimata';
  const args$4u = {};

  class OligonApostrofosKentimata extends BaseBody {
    constructor() {
      super(glyphname$4u, args$4u);
    }
  }

  const glyphname$4t = 'oligonYporroiKentimata';
  const args$4t = {};

  class OligonYporroiKentimata extends BaseBody {
    constructor() {
      super(glyphname$4t, args$4t);
    }
  }

  const glyphname$4s = 'oligonElafronKentimata';
  const args$4s = {};

  class OligonElafronKentimata extends BaseBody {
    constructor() {
      super(glyphname$4s, args$4s);
    }
  }

  const glyphname$4r = 'oligonRunningElafronKentimata';
  const args$4r = {};

  class OligonRunningElafronKentimata extends BaseBody {
    constructor() {
      super(glyphname$4r, args$4r);
    }
  }

  const glyphname$4q = 'oligonElafronApostrofosKentimata';
  const args$4q = {};

  class OligonElafronApostrofosKentimata extends BaseBody {
    constructor() {
      super(glyphname$4q, args$4q);
    }
  }

  const glyphname$4p = 'oligonChamiliKentimata';
  const args$4p = {};

  class OligonChamiliKentimata extends BaseBody {
    constructor() {
      super(glyphname$4p, args$4p);
    }
  }

  const glyphname$4o = 'vareia';
  const args$4o = {};

  class Vareia extends BaseBody {
    constructor() {
      super(glyphname$4o, args$4o);
    }

    connectedCallback() {
      super.connectedCallback();

      if (this.parentElement && this.parentElement.vareiaConnectedCallback) {
        this.parentElement.vareiaConnectedCallback();
      }
    }
  }

  const MAX_SEARCH_DEPTH$1 = 100;

  class BaseMark extends HTMLElement {
    static get observedAttributes() {
      return ['font-family', 'left', 'top'];
    }

    constructor(glyphname, args) {
      super();

      this.glyphname = glyphname;
      this.args = args;

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let styleAttr = '';
      let fontFamilyAttr = '';
      let saltAttr = '';

      if (this.hasAttribute('font-family')) {
        fontFamilyAttr = `font-family="${this.getAttribute('font-family')}"`;
      }

      if (this.hasAttribute('salt')) {
        saltAttr = `salt="${this.getAttribute('salt')}"`;
      }

      if (byzhtml.options.useWebkitPositioning) {
        let base = null;

        let previousSibling = this.previousElementSibling;

        let depth = 0;

        while (previousSibling && depth <= MAX_SEARCH_DEPTH$1) {
          if (!previousSibling.nodeName.startsWith('X-')) {
            break;
          }

          if (previousSibling instanceof BaseBody) {
            base = previousSibling.glyphname;
            break;
          }

          previousSibling = previousSibling.previousElementSibling;

          // Paranoia. Don't want an infinite loop;
          depth++;
        }

        if (base) {
          const style = getComputedStyle(this);

          const fontFamily = style.getPropertyValue(CssVars.NeumeFontFamily);

          // There is a race condition where the computed styles do not always contain
          // all the styles by the time the first neume loads.
          // Surely there's a better way to handle this...
          if (fontFamily === '') {
            requestAnimationFrame(() => {
              this.updateStyle();
            });
            return;
          }

          const offset = byzhtml.fontService.getMarkOffset(
            fontFamily,
            base,
            this.glyphname,
          );

          // Search for vareia
          // If present, we need to shift the offset by the width of the vareia
          let previousSibling = this.previousElementSibling;
          let depth = 0;

          while (previousSibling && depth <= MAX_SEARCH_DEPTH$1) {
            if (!previousSibling.nodeName.startsWith('X-')) {
              break;
            }

            if (previousSibling.nodeName.startsWith('X-VAR')) {
              offset.x += byzhtml.fontService.getAdvanceWidth(
                fontFamily,
                previousSibling.glyphname,
              );
              break;
            }

            previousSibling = previousSibling.previousElementSibling;

            // Paranoia. Don't want an infinite loop;
            depth++;
          }

          let left = `${offset.x}em`;

          if (this.hasAttribute('left')) {
            left = `calc(${left} + ${this.getAttribute('left')})`;
          }

          let top = `${offset.y}em`;

          if (this.hasAttribute('top')) {
            top = `calc(${top} + ${this.getAttribute('top')})`;
          }

          styleAttr = `position: absolute; left: ${left}; top: ${top}; width: 100%`;
        } else {
          console.warn('missing base for mark: ' + this.glyphname);
        }
      } else {
        if (this.hasAttribute('left') || this.hasAttribute('top')) {
          styleAttr += 'position: relative;';
        }

        if (this.hasAttribute('left')) {
          styleAttr += `left: ${this.getAttribute('left')};`;
        }

        if (this.hasAttribute('top')) {
          styleAttr += `top: ${this.getAttribute('top')};`;
        }
      }

      let otherStyles = '';

      if (this.args) {
        if (this.args.color) {
          otherStyles += ` color: var(${this.args.color});`;
        }
      }

      this.shadowRoot.innerHTML = `<style> :host { font-size: var(${CssVars.NeumeFontSize});${otherStyles} } </style><x-neume name="${this.glyphname}" style="${styleAttr}" ${fontFamilyAttr} ${saltAttr}></x-neume>`;
    }
  }

  const glyphname$4n = 'psifiston';
  const args$4n = {};

  class Psifiston extends BaseMark {
    constructor() {
      super(glyphname$4n, args$4n);
    }
  }

  const glyphname$4m = 'antikenoma';
  const args$4m = {};

  const MAX_SEARCH_DEPTH = 100;

  class Antikenoma extends BaseMark {
    constructor() {
      super(glyphname$4m, args$4m);

      // If using webkit positioning, perform a
      // contextual substitution when combined with certain other characters
      if (byzhtml.options.useWebkitPositioning) {
        let previousSibling = this.previousElementSibling;
        let depth = 0;
        let base;

        while (previousSibling && depth <= MAX_SEARCH_DEPTH) {
          if (!previousSibling.nodeName.startsWith('X-')) {
            break;
          }

          if (previousSibling instanceof BaseBody) {
            base = previousSibling.glyphname;
            break;
          }

          previousSibling = previousSibling.previousElementSibling;

          // Paranoia. Don't want an infinite loop;
          depth++;
        }

        if (
          base === 'apostrofos' ||
          base === 'yporroi' ||
          (base && base.startsWith('petasti'))
        ) {
          this.glyphname = 'antikenoma.alt01';
        }
      }
    }
  }

  const glyphname$4l = 'omalon';
  const args$4l = {};

  class Omalon extends BaseMark {
    constructor() {
      super(glyphname$4l, args$4l);
    }
  }

  const glyphname$4k = 'omalonConnecting';
  const args$4k = {};

  class OmalonConnecting extends BaseMark {
    constructor() {
      super(glyphname$4k, args$4k);
    }
  }

  const glyphname$4j = 'heteron';
  const args$4j = { color: CssVars.ColorHeteron };

  class Heteron extends BaseMark {
    constructor() {
      super(glyphname$4j, args$4j);
    }
  }

  const glyphname$4i = 'heteronConnecting';
  const args$4i = { color: CssVars.ColorHeteron };

  class HeteronConnecting extends BaseMark {
    constructor() {
      super(glyphname$4i, args$4i);
    }
  }

  const glyphname$4h = 'endofonon';
  const args$4h = { color: CssVars.ColorHeteron };

  class Endofonon extends BaseMark {
    constructor() {
      super(glyphname$4h, args$4h);
    }
  }

  const glyphname$4g = 'yfenAbove';
  const args$4g = {};

  class YfenAbove extends BaseMark {
    constructor() {
      super(glyphname$4g, args$4g);
    }
  }

  const glyphname$4f = 'yfenBelow';
  const args$4f = {};

  class YfenBelow extends BaseMark {
    constructor() {
      super(glyphname$4f, args$4f);
    }
  }

  const glyphname$4e = 'stavros';
  const args$4e = {};

  class Stavros extends BaseBody {
    constructor() {
      super(glyphname$4e, args$4e);
    }
  }

  const glyphname$4d = 'stavrosAbove';
      const args$4d = {};

      class StavrosAbove extends BaseMark {
      constructor() {
          super(glyphname$4d, args$4d);
      }
      }

  const glyphname$4c = 'breath';
  const args$4c = {};

  class Breath extends BaseBody {
    constructor() {
      super(glyphname$4c, args$4c);
    }
  }

  const glyphname$4b = 'klasmaAbove';
  const args$4b = {};

  class KlasmaAbove extends BaseMark {
    constructor() {
      super(glyphname$4b, args$4b);
    }
  }

  const glyphname$4a = 'klasmaBelow';
  const args$4a = {};

  class KlasmaBelow extends BaseMark {
    constructor() {
      super(glyphname$4a, args$4a);
    }
  }

  const glyphname$49 = 'apli';
  const args$49 = {};

  class Apli extends BaseMark {
    constructor() {
      super(glyphname$49, args$49);
    }
  }

  const glyphname$48 = 'dipli';
  const args$48 = {};

  class Dipli extends BaseMark {
    constructor() {
      super(glyphname$48, args$48);
    }
  }

  const glyphname$47 = 'tripli';
  const args$47 = {};

  class Tripli extends BaseMark {
    constructor() {
      super(glyphname$47, args$47);
    }
  }

  const glyphname$46 = 'tetrapli';
  const args$46 = {};

  class Tetrapli extends BaseMark {
    constructor() {
      super(glyphname$46, args$46);
    }
  }

  const glyphname$45 = 'koronis';
  const args$45 = { color: CssVars.ColorKoronis };

  class Koronis extends BaseMark {
    constructor() {
      super(glyphname$45, args$45);
    }
  }

  const glyphname$44 = 'leimma1';
  const args$44 = {};

  class Leimma1 extends BaseBody {
    constructor() {
      super(glyphname$44, args$44);
    }
  }

  const glyphname$43 = 'leimma2';
  const args$43 = {};

  class Leimma2 extends BaseBody {
    constructor() {
      super(glyphname$43, args$43);
    }
  }

  const glyphname$42 = 'leimma3';
  const args$42 = {};

  class Leimma3 extends BaseBody {
    constructor() {
      super(glyphname$42, args$42);
    }
  }

  const glyphname$41 = 'leimma4';
  const args$41 = {};

  class Leimma4 extends BaseBody {
    constructor() {
      super(glyphname$41, args$41);
    }
  }

  const glyphname$40 = 'leimmaDot';
  const args$40 = {};

  class LeimmaDot extends BaseMark {
    constructor() {
      super(glyphname$40, args$40);
    }
  }

  const glyphname$3$ = 'gorgonAbove';
  const args$3$ = { color: CssVars.ColorGorgon };

  class GorgonAbove extends BaseMark {
    constructor() {
      super(glyphname$3$, args$3$);
    }
  }

  const glyphname$3_ = 'gorgonBelow';
  const args$3_ = { color: CssVars.ColorGorgon };

  class GorgonBelow extends BaseMark {
    constructor() {
      super(glyphname$3_, args$3_);
    }
  }

  const glyphname$3Z = 'gorgonDottedLeft';
  const args$3Z = { color: CssVars.ColorGorgon };

  class GorgonDottedLeft extends BaseMark {
    constructor() {
      super(glyphname$3Z, args$3Z);
    }
  }

  const glyphname$3Y = 'gorgonDottedRight';
  const args$3Y = { color: CssVars.ColorGorgon };

  class GorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$3Y, args$3Y);
    }
  }

  const glyphname$3X = 'digorgon';
  const args$3X = { color: CssVars.ColorGorgon };

  class Digorgon extends BaseMark {
    constructor() {
      super(glyphname$3X, args$3X);
    }
  }

  const glyphname$3W = 'digorgonDottedLeftBelow';
  const args$3W = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftBelow extends BaseMark {
    constructor() {
      super(glyphname$3W, args$3W);
    }
  }

  const glyphname$3V = 'digorgonDottedLeftAbove';
  const args$3V = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftAbove extends BaseMark {
    constructor() {
      super(glyphname$3V, args$3V);
    }
  }

  const glyphname$3U = 'digorgonDottedRight';
  const args$3U = { color: CssVars.ColorGorgon };

  class DigorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$3U, args$3U);
    }
  }

  const glyphname$3T = 'trigorgon';
  const args$3T = { color: CssVars.ColorGorgon };

  class Trigorgon extends BaseMark {
    constructor() {
      super(glyphname$3T, args$3T);
    }
  }

  const glyphname$3S = 'trigorgonDottedLeftBelow';
  const args$3S = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftBelow extends BaseMark {
    constructor() {
      super(glyphname$3S, args$3S);
    }
  }

  const glyphname$3R = 'trigorgonDottedLeftAbove';
  const args$3R = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftAbove extends BaseMark {
    constructor() {
      super(glyphname$3R, args$3R);
    }
  }

  const glyphname$3Q = 'trigorgonDottedRight';
  const args$3Q = { color: CssVars.ColorGorgon };

  class TrigorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$3Q, args$3Q);
    }
  }

  const glyphname$3P = 'argon';
  const args$3P = { color: CssVars.ColorGorgon };

  class Argon extends BaseMark {
    constructor() {
      super(glyphname$3P, args$3P);
    }
  }

  const glyphname$3O = 'diargon';
  const args$3O = { color: CssVars.ColorGorgon };

  class Diargon extends BaseMark {
    constructor() {
      super(glyphname$3O, args$3O);
    }
  }

  const glyphname$3N = 'triargon';
  const args$3N = { color: CssVars.ColorGorgon };

  class Triargon extends BaseMark {
    constructor() {
      super(glyphname$3N, args$3N);
    }
  }

  const glyphname$3M = 'gorgonSecondary';
  const args$3M = { color: CssVars.ColorGorgon };

  class GorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$3M, args$3M);
    }
  }

  const glyphname$3L = 'gorgonDottedLeftSecondary';
  const args$3L = { color: CssVars.ColorGorgon };

  class GorgonDottedLeftSecondary extends BaseMark {
    constructor() {
      super(glyphname$3L, args$3L);
    }
  }

  const glyphname$3K = 'gorgonDottedRightSecondary';
  const args$3K = { color: CssVars.ColorGorgon };

  class GorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$3K, args$3K);
    }
  }

  const glyphname$3J = 'digorgonSecondary';
  const args$3J = { color: CssVars.ColorGorgon };

  class DigorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$3J, args$3J);
    }
  }

  const glyphname$3I = 'digorgonDottedLeftBelowSecondary';
  const args$3I = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftBelowSecondary extends BaseMark {
    constructor() {
      super(glyphname$3I, args$3I);
    }
  }

  const glyphname$3H = 'digorgonDottedRightSecondary';
  const args$3H = { color: CssVars.ColorGorgon };

  class DigorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$3H, args$3H);
    }
  }

  const glyphname$3G = 'trigorgonSecondary';
  const args$3G = { color: CssVars.ColorGorgon };

  class TrigorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$3G, args$3G);
    }
  }

  const glyphname$3F = 'trigorgonDottedLeftBelowSecondary';
  const args$3F = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftBelowSecondary extends BaseMark {
    constructor() {
      super(glyphname$3F, args$3F);
    }
  }

  const glyphname$3E = 'trigorgonDottedRightSecondary';
  const args$3E = { color: CssVars.ColorGorgon };

  class TrigorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$3E, args$3E);
    }
  }

  const glyphname$3D = 'digorgonDottedLeftSecondary';
  const args$3D = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftSecondary extends BaseMark {
    constructor() {
      super(glyphname$3D, args$3D);
    }
  }

  const glyphname$3C = 'trigorgonDottedLeftSecondary';
  const args$3C = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftSecondary extends BaseMark {
    constructor() {
      super(glyphname$3C, args$3C);
    }
  }

  const glyphname$3B = 'agogiPoliArgi';
  const args$3B = { color: CssVars.ColorAgogi };

  class AgogiPoliArgi extends BaseBody {
    constructor() {
      super(glyphname$3B, args$3B);
    }
  }

  const glyphname$3A = 'agogiArgoteri';
  const args$3A = { color: CssVars.ColorAgogi };

  class AgogiArgoteri extends BaseBody {
    constructor() {
      super(glyphname$3A, args$3A);
    }
  }

  const glyphname$3z = 'agogiArgi';
  const args$3z = { color: CssVars.ColorAgogi };

  class AgogiArgi extends BaseBody {
    constructor() {
      super(glyphname$3z, args$3z);
    }
  }

  const glyphname$3y = 'agogiMetria';
  const args$3y = { color: CssVars.ColorAgogi };

  class AgogiMetria extends BaseBody {
    constructor() {
      super(glyphname$3y, args$3y);
    }
  }

  const glyphname$3x = 'agogiMesi';
  const args$3x = { color: CssVars.ColorAgogi };

  class AgogiMesi extends BaseBody {
    constructor() {
      super(glyphname$3x, args$3x);
    }
  }

  const glyphname$3w = 'agogiGorgi';
  const args$3w = { color: CssVars.ColorAgogi };

  class AgogiGorgi extends BaseBody {
    constructor() {
      super(glyphname$3w, args$3w);
    }
  }

  const glyphname$3v = 'agogiGorgoteri';
  const args$3v = { color: CssVars.ColorAgogi };

  class AgogiGorgoteri extends BaseBody {
    constructor() {
      super(glyphname$3v, args$3v);
    }
  }

  const glyphname$3u = 'agogiPoliGorgi';
  const args$3u = { color: CssVars.ColorAgogi };

  class AgogiPoliGorgi extends BaseBody {
    constructor() {
      super(glyphname$3u, args$3u);
    }
  }

  const glyphname$3t = 'agogiPoliArgiAbove';
  const args$3t = { color: CssVars.ColorAgogi };

  class AgogiPoliArgiAbove extends BaseMark {
    constructor() {
      super(glyphname$3t, args$3t);
    }
  }

  const glyphname$3s = 'agogiArgoteriAbove';
  const args$3s = { color: CssVars.ColorAgogi };

  class AgogiArgoteriAbove extends BaseMark {
    constructor() {
      super(glyphname$3s, args$3s);
    }
  }

  const glyphname$3r = 'agogiArgiAbove';
  const args$3r = { color: CssVars.ColorAgogi };

  class AgogiArgiAbove extends BaseMark {
    constructor() {
      super(glyphname$3r, args$3r);
    }
  }

  const glyphname$3q = 'agogiMetriaAbove';
  const args$3q = { color: CssVars.ColorAgogi };

  class AgogiMetriaAbove extends BaseMark {
    constructor() {
      super(glyphname$3q, args$3q);
    }
  }

  const glyphname$3p = 'agogiMesiAbove';
  const args$3p = { color: CssVars.ColorAgogi };

  class AgogiMesiAbove extends BaseMark {
    constructor() {
      super(glyphname$3p, args$3p);
    }
  }

  const glyphname$3o = 'agogiGorgiAbove';
  const args$3o = { color: CssVars.ColorAgogi };

  class AgogiGorgiAbove extends BaseMark {
    constructor() {
      super(glyphname$3o, args$3o);
    }
  }

  const glyphname$3n = 'agogiGorgoteriAbove';
  const args$3n = { color: CssVars.ColorAgogi };

  class AgogiGorgoteriAbove extends BaseMark {
    constructor() {
      super(glyphname$3n, args$3n);
    }
  }

  const glyphname$3m = 'agogiPoliGorgiAbove';
  const args$3m = { color: CssVars.ColorAgogi };

  class AgogiPoliGorgiAbove extends BaseMark {
    constructor() {
      super(glyphname$3m, args$3m);
    }
  }

  const glyphname$3l = 'martyriaNoteZoLow';
  const args$3l = { color: CssVars.ColorMartyria };

  class MartyriaNoteZoLow extends BaseBody {
    constructor() {
      super(glyphname$3l, args$3l);
    }
  }

  const glyphname$3k = 'martyriaNoteNiLow';
  const args$3k = { color: CssVars.ColorMartyria };

  class MartyriaNoteNiLow extends BaseBody {
    constructor() {
      super(glyphname$3k, args$3k);
    }
  }

  const glyphname$3j = 'martyriaNotePaLow';
  const args$3j = { color: CssVars.ColorMartyria };

  class MartyriaNotePaLow extends BaseBody {
    constructor() {
      super(glyphname$3j, args$3j);
    }
  }

  const glyphname$3i = 'martyriaNoteVouLow';
  const args$3i = { color: CssVars.ColorMartyria };

  class MartyriaNoteVouLow extends BaseBody {
    constructor() {
      super(glyphname$3i, args$3i);
    }
  }

  const glyphname$3h = 'martyriaNoteGaLow';
  const args$3h = { color: CssVars.ColorMartyria };

  class MartyriaNoteGaLow extends BaseBody {
    constructor() {
      super(glyphname$3h, args$3h);
    }
  }

  const glyphname$3g = 'martyriaNoteDiLow';
  const args$3g = { color: CssVars.ColorMartyria };

  class MartyriaNoteDiLow extends BaseBody {
    constructor() {
      super(glyphname$3g, args$3g);
    }
  }

  const glyphname$3f = 'martyriaNoteKeLow';
  const args$3f = { color: CssVars.ColorMartyria };

  class MartyriaNoteKeLow extends BaseBody {
    constructor() {
      super(glyphname$3f, args$3f);
    }
  }

  const glyphname$3e = 'martyriaNoteZo';
  const args$3e = { color: CssVars.ColorMartyria };

  class MartyriaNoteZo extends BaseBody {
    constructor() {
      super(glyphname$3e, args$3e);
    }
  }

  const glyphname$3d = 'martyriaNoteNi';
  const args$3d = { color: CssVars.ColorMartyria };

  class MartyriaNoteNi extends BaseBody {
    constructor() {
      super(glyphname$3d, args$3d);
    }
  }

  const glyphname$3c = 'martyriaNotePa';
  const args$3c = { color: CssVars.ColorMartyria };

  class MartyriaNotePa extends BaseBody {
    constructor() {
      super(glyphname$3c, args$3c);
    }
  }

  const glyphname$3b = 'martyriaNoteVou';
  const args$3b = { color: CssVars.ColorMartyria };

  class MartyriaNoteVou extends BaseBody {
    constructor() {
      super(glyphname$3b, args$3b);
    }
  }

  const glyphname$3a = 'martyriaNoteGa';
  const args$3a = { color: CssVars.ColorMartyria };

  class MartyriaNoteGa extends BaseBody {
    constructor() {
      super(glyphname$3a, args$3a);
    }
  }

  const glyphname$39 = 'martyriaNoteDi';
  const args$39 = { color: CssVars.ColorMartyria };

  class MartyriaNoteDi extends BaseBody {
    constructor() {
      super(glyphname$39, args$39);
    }
  }

  const glyphname$38 = 'martyriaNoteKe';
  const args$38 = { color: CssVars.ColorMartyria };

  class MartyriaNoteKe extends BaseBody {
    constructor() {
      super(glyphname$38, args$38);
    }
  }

  const glyphname$37 = 'martyriaNoteZoHigh';
  const args$37 = { color: CssVars.ColorMartyria };

  class MartyriaNoteZoHigh extends BaseBody {
    constructor() {
      super(glyphname$37, args$37);
    }
  }

  const glyphname$36 = 'martyriaNoteNiHigh';
  const args$36 = { color: CssVars.ColorMartyria };

  class MartyriaNoteNiHigh extends BaseBody {
    constructor() {
      super(glyphname$36, args$36);
    }
  }

  const glyphname$35 = 'martyriaNotePaHigh';
  const args$35 = { color: CssVars.ColorMartyria };

  class MartyriaNotePaHigh extends BaseBody {
    constructor() {
      super(glyphname$35, args$35);
    }
  }

  const glyphname$34 = 'martyriaNoteVouHigh';
  const args$34 = { color: CssVars.ColorMartyria };

  class MartyriaNoteVouHigh extends BaseBody {
    constructor() {
      super(glyphname$34, args$34);
    }
  }

  const glyphname$33 = 'martyriaNoteGaHigh';
  const args$33 = { color: CssVars.ColorMartyria };

  class MartyriaNoteGaHigh extends BaseBody {
    constructor() {
      super(glyphname$33, args$33);
    }
  }

  const glyphname$32 = 'martyriaNoteDiHigh';
  const args$32 = { color: CssVars.ColorMartyria };

  class MartyriaNoteDiHigh extends BaseBody {
    constructor() {
      super(glyphname$32, args$32);
    }
  }

  const glyphname$31 = 'martyriaNoteKeHigh';
  const args$31 = { color: CssVars.ColorMartyria };

  class MartyriaNoteKeHigh extends BaseBody {
    constructor() {
      super(glyphname$31, args$31);
    }
  }

  const glyphname$30 = 'martyriaTick';
  const args$30 = { color: CssVars.ColorMartyria };

  class MartyriaTick extends BaseMark {
    constructor() {
      super(glyphname$30, args$30);
    }
  }

  const glyphname$2$ = 'martyriaZoBelow';
  const args$2$ = { color: CssVars.ColorMartyria };

  class MartyriaZoBelow extends BaseMark {
    constructor() {
      super(glyphname$2$, args$2$);
    }
  }

  const glyphname$2_ = 'martyriaDeltaBelow';
  const args$2_ = { color: CssVars.ColorMartyria };

  class MartyriaDeltaBelow extends BaseMark {
    constructor() {
      super(glyphname$2_, args$2_);
    }
  }

  const glyphname$2Z = 'martyriaAlphaBelow';
  const args$2Z = { color: CssVars.ColorMartyria };

  class MartyriaAlphaBelow extends BaseMark {
    constructor() {
      super(glyphname$2Z, args$2Z);
    }
  }

  const glyphname$2Y = 'martyriaLegetosBelow';
  const args$2Y = { color: CssVars.ColorMartyria };

  class MartyriaLegetosBelow extends BaseMark {
    constructor() {
      super(glyphname$2Y, args$2Y);
    }
  }

  const glyphname$2X = 'martyriaNanaBelow';
  const args$2X = { color: CssVars.ColorMartyria };

  class MartyriaNanaBelow extends BaseMark {
    constructor() {
      super(glyphname$2X, args$2X);
    }
  }

  const glyphname$2W = 'martyriaDeltaDottedBelow';
  const args$2W = { color: CssVars.ColorMartyria };

  class MartyriaDeltaDottedBelow extends BaseMark {
    constructor() {
      super(glyphname$2W, args$2W);
    }
  }

  const glyphname$2V = 'martyriaAlphaDottedBelow';
  const args$2V = { color: CssVars.ColorMartyria };

  class MartyriaAlphaDottedBelow extends BaseMark {
    constructor() {
      super(glyphname$2V, args$2V);
    }
  }

  const glyphname$2U = 'martyriaHardChromaticPaBelow';
  const args$2U = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticPaBelow extends BaseMark {
    constructor() {
      super(glyphname$2U, args$2U);
    }
  }

  const glyphname$2T = 'martyriaHardChromaticDiBelow';
  const args$2T = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$2T, args$2T);
    }
  }

  const glyphname$2S = 'martyriaSoftChromaticDiBelow';
  const args$2S = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$2S, args$2S);
    }
  }

  const glyphname$2R = 'martyriaSoftChromaticKeBelow';
  const args$2R = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticKeBelow extends BaseMark {
    constructor() {
      super(glyphname$2R, args$2R);
    }
  }

  const glyphname$2Q = 'martyriaZygosBelow';
  const args$2Q = { color: CssVars.ColorMartyria };

  class MartyriaZygosBelow extends BaseMark {
    constructor() {
      super(glyphname$2Q, args$2Q);
    }
  }

  const glyphname$2P = 'martyriaZoAbove';
  const args$2P = { color: CssVars.ColorMartyria };

  class MartyriaZoAbove extends BaseMark {
    constructor() {
      super(glyphname$2P, args$2P);
    }
  }

  const glyphname$2O = 'martyriaDeltaAbove';
  const args$2O = { color: CssVars.ColorMartyria };

  class MartyriaDeltaAbove extends BaseMark {
    constructor() {
      super(glyphname$2O, args$2O);
    }
  }

  const glyphname$2N = 'martyriaAlphaAbove';
  const args$2N = { color: CssVars.ColorMartyria };

  class MartyriaAlphaAbove extends BaseMark {
    constructor() {
      super(glyphname$2N, args$2N);
    }
  }

  const glyphname$2M = 'martyriaLegetosAbove';
  const args$2M = { color: CssVars.ColorMartyria };

  class MartyriaLegetosAbove extends BaseMark {
    constructor() {
      super(glyphname$2M, args$2M);
    }
  }

  const glyphname$2L = 'martyriaNanaAbove';
  const args$2L = { color: CssVars.ColorMartyria };

  class MartyriaNanaAbove extends BaseMark {
    constructor() {
      super(glyphname$2L, args$2L);
    }
  }

  const glyphname$2K = 'martyriaDeltaDottedAbove';
  const args$2K = { color: CssVars.ColorMartyria };

  class MartyriaDeltaDottedAbove extends BaseMark {
    constructor() {
      super(glyphname$2K, args$2K);
    }
  }

  const glyphname$2J = 'martyriaAlphaDottedAbove';
  const args$2J = { color: CssVars.ColorMartyria };

  class MartyriaAlphaDottedAbove extends BaseMark {
    constructor() {
      super(glyphname$2J, args$2J);
    }
  }

  const glyphname$2I = 'martyriaHardChromaticPaAbove';
  const args$2I = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticPaAbove extends BaseMark {
    constructor() {
      super(glyphname$2I, args$2I);
    }
  }

  const glyphname$2H = 'martyriaHardChromaticDiAbove';
  const args$2H = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$2H, args$2H);
    }
  }

  const glyphname$2G = 'martyriaSoftChromaticDiAbove';
  const args$2G = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$2G, args$2G);
    }
  }

  const glyphname$2F = 'martyriaSoftChromaticKeAbove';
  const args$2F = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticKeAbove extends BaseMark {
    constructor() {
      super(glyphname$2F, args$2F);
    }
  }

  const glyphname$2E = 'martyriaZygosAbove';
  const args$2E = { color: CssVars.ColorMartyria };

  class MartyriaZygosAbove extends BaseMark {
    constructor() {
      super(glyphname$2E, args$2E);
    }
  }

  const glyphname$2D = 'fthoraDiatonicNiLowAbove';
  const args$2D = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiLowAbove extends BaseMark {
    constructor() {
      super(glyphname$2D, args$2D);
    }
  }

  const glyphname$2C = 'fthoraDiatonicPaAbove';
  const args$2C = { color: CssVars.ColorFthora };

  class FthoraDiatonicPaAbove extends BaseMark {
    constructor() {
      super(glyphname$2C, args$2C);
    }
  }

  const glyphname$2B = 'fthoraDiatonicVouAbove';
  const args$2B = { color: CssVars.ColorFthora };

  class FthoraDiatonicVouAbove extends BaseMark {
    constructor() {
      super(glyphname$2B, args$2B);
    }
  }

  const glyphname$2A = 'fthoraDiatonicGaAbove';
  const args$2A = { color: CssVars.ColorFthora };

  class FthoraDiatonicGaAbove extends BaseMark {
    constructor() {
      super(glyphname$2A, args$2A);
    }
  }

  const glyphname$2z = 'fthoraDiatonicDiAbove';
  const args$2z = { color: CssVars.ColorFthora };

  class FthoraDiatonicDiAbove extends BaseMark {
    constructor() {
      super(glyphname$2z, args$2z);
    }
  }

  const glyphname$2y = 'fthoraDiatonicKeAbove';
  const args$2y = { color: CssVars.ColorFthora };

  class FthoraDiatonicKeAbove extends BaseMark {
    constructor() {
      super(glyphname$2y, args$2y);
    }
  }

  const glyphname$2x = 'fthoraDiatonicZoAbove';
  const args$2x = { color: CssVars.ColorFthora };

  class FthoraDiatonicZoAbove extends BaseMark {
    constructor() {
      super(glyphname$2x, args$2x);
    }
  }

  const glyphname$2w = 'fthoraDiatonicNiHighAbove';
  const args$2w = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiHighAbove extends BaseMark {
    constructor() {
      super(glyphname$2w, args$2w);
    }
  }

  const glyphname$2v = 'fthoraHardChromaticPaAbove';
  const args$2v = { color: CssVars.ColorFthora };

  class FthoraHardChromaticPaAbove extends BaseMark {
    constructor() {
      super(glyphname$2v, args$2v);
    }
  }

  const glyphname$2u = 'fthoraHardChromaticDiAbove';
  const args$2u = { color: CssVars.ColorFthora };

  class FthoraHardChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$2u, args$2u);
    }
  }

  const glyphname$2t = 'fthoraSoftChromaticDiAbove';
  const args$2t = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$2t, args$2t);
    }
  }

  const glyphname$2s = 'fthoraSoftChromaticKeAbove';
  const args$2s = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticKeAbove extends BaseMark {
    constructor() {
      super(glyphname$2s, args$2s);
    }
  }

  const glyphname$2r = 'fthoraEnharmonicAbove';
  const args$2r = { color: CssVars.ColorFthora };

  class FthoraEnharmonicAbove extends BaseMark {
    constructor() {
      super(glyphname$2r, args$2r);
    }
  }

  const glyphname$2q = 'chroaZygosAbove';
  const args$2q = { color: CssVars.ColorFthora };

  class ChroaZygosAbove extends BaseMark {
    constructor() {
      super(glyphname$2q, args$2q);
    }
  }

  const glyphname$2p = 'chroaKlitonAbove';
  const args$2p = { color: CssVars.ColorFthora };

  class ChroaKlitonAbove extends BaseMark {
    constructor() {
      super(glyphname$2p, args$2p);
    }
  }

  const glyphname$2o = 'chroaSpathiAbove';
  const args$2o = { color: CssVars.ColorFthora };

  class ChroaSpathiAbove extends BaseMark {
    constructor() {
      super(glyphname$2o, args$2o);
    }
  }

  const glyphname$2n = 'fthoraDiatonicNiLowSecondary';
  const args$2n = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiLowSecondary extends BaseMark {
    constructor() {
      super(glyphname$2n, args$2n);
    }
  }

  const glyphname$2m = 'fthoraDiatonicPaSecondary';
  const args$2m = { color: CssVars.ColorFthora };

  class FthoraDiatonicPaSecondary extends BaseMark {
    constructor() {
      super(glyphname$2m, args$2m);
    }
  }

  const glyphname$2l = 'fthoraDiatonicVouSecondary';
  const args$2l = { color: CssVars.ColorFthora };

  class FthoraDiatonicVouSecondary extends BaseMark {
    constructor() {
      super(glyphname$2l, args$2l);
    }
  }

  const glyphname$2k = 'fthoraDiatonicGaSecondary';
  const args$2k = { color: CssVars.ColorFthora };

  class FthoraDiatonicGaSecondary extends BaseMark {
    constructor() {
      super(glyphname$2k, args$2k);
    }
  }

  const glyphname$2j = 'fthoraDiatonicDiSecondary';
  const args$2j = { color: CssVars.ColorFthora };

  class FthoraDiatonicDiSecondary extends BaseMark {
    constructor() {
      super(glyphname$2j, args$2j);
    }
  }

  const glyphname$2i = 'fthoraDiatonicKeSecondary';
  const args$2i = { color: CssVars.ColorFthora };

  class FthoraDiatonicKeSecondary extends BaseMark {
    constructor() {
      super(glyphname$2i, args$2i);
    }
  }

  const glyphname$2h = 'fthoraDiatonicZoSecondary';
  const args$2h = { color: CssVars.ColorFthora };

  class FthoraDiatonicZoSecondary extends BaseMark {
    constructor() {
      super(glyphname$2h, args$2h);
    }
  }

  const glyphname$2g = 'fthoraDiatonicNiHighSecondary';
  const args$2g = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiHighSecondary extends BaseMark {
    constructor() {
      super(glyphname$2g, args$2g);
    }
  }

  const glyphname$2f = 'fthoraHardChromaticPaSecondary';
  const args$2f = { color: CssVars.ColorFthora };

  class FthoraHardChromaticPaSecondary extends BaseMark {
    constructor() {
      super(glyphname$2f, args$2f);
    }
  }

  const glyphname$2e = 'fthoraHardChromaticDiSecondary';
  const args$2e = { color: CssVars.ColorFthora };

  class FthoraHardChromaticDiSecondary extends BaseMark {
    constructor() {
      super(glyphname$2e, args$2e);
    }
  }

  const glyphname$2d = 'fthoraSoftChromaticDiSecondary';
  const args$2d = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticDiSecondary extends BaseMark {
    constructor() {
      super(glyphname$2d, args$2d);
    }
  }

  const glyphname$2c = 'fthoraSoftChromaticKeSecondary';
  const args$2c = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticKeSecondary extends BaseMark {
    constructor() {
      super(glyphname$2c, args$2c);
    }
  }

  const glyphname$2b = 'fthoraEnharmonicSecondary';
  const args$2b = { color: CssVars.ColorFthora };

  class FthoraEnharmonicSecondary extends BaseMark {
    constructor() {
      super(glyphname$2b, args$2b);
    }
  }

  const glyphname$2a = 'chroaZygosSecondary';
  const args$2a = { color: CssVars.ColorFthora };

  class ChroaZygosSecondary extends BaseMark {
    constructor() {
      super(glyphname$2a, args$2a);
    }
  }

  const glyphname$29 = 'chroaKlitonSecondary';
  const args$29 = { color: CssVars.ColorFthora };

  class ChroaKlitonSecondary extends BaseMark {
    constructor() {
      super(glyphname$29, args$29);
    }
  }

  const glyphname$28 = 'chroaSpathiSecondary';
  const args$28 = { color: CssVars.ColorFthora };

  class ChroaSpathiSecondary extends BaseMark {
    constructor() {
      super(glyphname$28, args$28);
    }
  }

  const glyphname$27 = 'fthoraDiatonicNiLowTertiary';
  const args$27 = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiLowTertiary extends BaseMark {
    constructor() {
      super(glyphname$27, args$27);
    }
  }

  const glyphname$26 = 'fthoraDiatonicPaTertiary';
  const args$26 = { color: CssVars.ColorFthora };

  class FthoraDiatonicPaTertiary extends BaseMark {
    constructor() {
      super(glyphname$26, args$26);
    }
  }

  const glyphname$25 = 'fthoraDiatonicVouTertiary';
  const args$25 = { color: CssVars.ColorFthora };

  class FthoraDiatonicVouTertiary extends BaseMark {
    constructor() {
      super(glyphname$25, args$25);
    }
  }

  const glyphname$24 = 'fthoraDiatonicGaTertiary';
  const args$24 = { color: CssVars.ColorFthora };

  class FthoraDiatonicGaTertiary extends BaseMark {
    constructor() {
      super(glyphname$24, args$24);
    }
  }

  const glyphname$23 = 'fthoraDiatonicDiTertiary';
  const args$23 = { color: CssVars.ColorFthora };

  class FthoraDiatonicDiTertiary extends BaseMark {
    constructor() {
      super(glyphname$23, args$23);
    }
  }

  const glyphname$22 = 'fthoraDiatonicKeTertiary';
  const args$22 = { color: CssVars.ColorFthora };

  class FthoraDiatonicKeTertiary extends BaseMark {
    constructor() {
      super(glyphname$22, args$22);
    }
  }

  const glyphname$21 = 'fthoraDiatonicZoTertiary';
  const args$21 = { color: CssVars.ColorFthora };

  class FthoraDiatonicZoTertiary extends BaseMark {
    constructor() {
      super(glyphname$21, args$21);
    }
  }

  const glyphname$20 = 'fthoraDiatonicNiHighTertiary';
  const args$20 = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiHighTertiary extends BaseMark {
    constructor() {
      super(glyphname$20, args$20);
    }
  }

  const glyphname$1$ = 'fthoraHardChromaticPaTertiary';
  const args$1$ = { color: CssVars.ColorFthora };

  class FthoraHardChromaticPaTertiary extends BaseMark {
    constructor() {
      super(glyphname$1$, args$1$);
    }
  }

  const glyphname$1_ = 'fthoraHardChromaticDiTertiary';
  const args$1_ = { color: CssVars.ColorFthora };

  class FthoraHardChromaticDiTertiary extends BaseMark {
    constructor() {
      super(glyphname$1_, args$1_);
    }
  }

  const glyphname$1Z = 'fthoraSoftChromaticDiTertiary';
  const args$1Z = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticDiTertiary extends BaseMark {
    constructor() {
      super(glyphname$1Z, args$1Z);
    }
  }

  const glyphname$1Y = 'fthoraSoftChromaticKeTertiary';
  const args$1Y = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticKeTertiary extends BaseMark {
    constructor() {
      super(glyphname$1Y, args$1Y);
    }
  }

  const glyphname$1X = 'fthoraEnharmonicTertiary';
  const args$1X = { color: CssVars.ColorFthora };

  class FthoraEnharmonicTertiary extends BaseMark {
    constructor() {
      super(glyphname$1X, args$1X);
    }
  }

  const glyphname$1W = 'chroaZygosTertiary';
  const args$1W = { color: CssVars.ColorFthora };

  class ChroaZygosTertiary extends BaseMark {
    constructor() {
      super(glyphname$1W, args$1W);
    }
  }

  const glyphname$1V = 'chroaKlitonTertiary';
  const args$1V = { color: CssVars.ColorFthora };

  class ChroaKlitonTertiary extends BaseMark {
    constructor() {
      super(glyphname$1V, args$1V);
    }
  }

  const glyphname$1U = 'chroaSpathiTertiary';
  const args$1U = { color: CssVars.ColorFthora };

  class ChroaSpathiTertiary extends BaseMark {
    constructor() {
      super(glyphname$1U, args$1U);
    }
  }

  const glyphname$1T = 'fthoraDiatonicNiLowBelow';
  const args$1T = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiLowBelow extends BaseMark {
    constructor() {
      super(glyphname$1T, args$1T);
    }
  }

  const glyphname$1S = 'fthoraDiatonicPaBelow';
  const args$1S = { color: CssVars.ColorFthora };

  class FthoraDiatonicPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1S, args$1S);
    }
  }

  const glyphname$1R = 'fthoraDiatonicVouBelow';
  const args$1R = { color: CssVars.ColorFthora };

  class FthoraDiatonicVouBelow extends BaseMark {
    constructor() {
      super(glyphname$1R, args$1R);
    }
  }

  const glyphname$1Q = 'fthoraDiatonicGaBelow';
  const args$1Q = { color: CssVars.ColorFthora };

  class FthoraDiatonicGaBelow extends BaseMark {
    constructor() {
      super(glyphname$1Q, args$1Q);
    }
  }

  const glyphname$1P = 'fthoraDiatonicDiBelow';
  const args$1P = { color: CssVars.ColorFthora };

  class FthoraDiatonicDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1P, args$1P);
    }
  }

  const glyphname$1O = 'fthoraDiatonicKeBelow';
  const args$1O = { color: CssVars.ColorFthora };

  class FthoraDiatonicKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1O, args$1O);
    }
  }

  const glyphname$1N = 'fthoraDiatonicZoBelow';
  const args$1N = { color: CssVars.ColorFthora };

  class FthoraDiatonicZoBelow extends BaseMark {
    constructor() {
      super(glyphname$1N, args$1N);
    }
  }

  const glyphname$1M = 'fthoraDiatonicNiHighBelow';
  const args$1M = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiHighBelow extends BaseMark {
    constructor() {
      super(glyphname$1M, args$1M);
    }
  }

  const glyphname$1L = 'fthoraHardChromaticPaBelow';
  const args$1L = { color: CssVars.ColorFthora };

  class FthoraHardChromaticPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1L, args$1L);
    }
  }

  const glyphname$1K = 'fthoraHardChromaticDiBelow';
  const args$1K = { color: CssVars.ColorFthora };

  class FthoraHardChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1K, args$1K);
    }
  }

  const glyphname$1J = 'fthoraSoftChromaticDiBelow';
  const args$1J = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1J, args$1J);
    }
  }

  const glyphname$1I = 'fthoraSoftChromaticKeBelow';
  const args$1I = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1I, args$1I);
    }
  }

  const glyphname$1H = 'fthoraEnharmonicBelow';
  const args$1H = { color: CssVars.ColorFthora };

  class FthoraEnharmonicBelow extends BaseMark {
    constructor() {
      super(glyphname$1H, args$1H);
    }
  }

  const glyphname$1G = 'chroaZygosBelow';
  const args$1G = { color: CssVars.ColorFthora };

  class ChroaZygosBelow extends BaseMark {
    constructor() {
      super(glyphname$1G, args$1G);
    }
  }

  const glyphname$1F = 'chroaKlitonBelow';
  const args$1F = { color: CssVars.ColorFthora };

  class ChroaKlitonBelow extends BaseMark {
    constructor() {
      super(glyphname$1F, args$1F);
    }
  }

  const glyphname$1E = 'chroaSpathiBelow';
  const args$1E = { color: CssVars.ColorFthora };

  class ChroaSpathiBelow extends BaseMark {
    constructor() {
      super(glyphname$1E, args$1E);
    }
  }

  const glyphname$1D = 'diesis2';
  const args$1D = { color: CssVars.ColorAccidental };

  class Diesis2 extends BaseMark {
    constructor() {
      super(glyphname$1D, args$1D);
    }
  }

  const glyphname$1C = 'diesis4';
  const args$1C = { color: CssVars.ColorAccidental };

  class Diesis4 extends BaseMark {
    constructor() {
      super(glyphname$1C, args$1C);
    }
  }

  const glyphname$1B = 'diesis6';
  const args$1B = { color: CssVars.ColorAccidental };

  class Diesis6 extends BaseMark {
    constructor() {
      super(glyphname$1B, args$1B);
    }
  }

  const glyphname$1A = 'diesis8';
  const args$1A = { color: CssVars.ColorAccidental };

  class Diesis8 extends BaseMark {
    constructor() {
      super(glyphname$1A, args$1A);
    }
  }

  const glyphname$1z = 'diesisGenikiAbove';
  const args$1z = { color: CssVars.ColorAccidental };

  class DiesisGenikiAbove extends BaseMark {
    constructor() {
      super(glyphname$1z, args$1z);
    }
  }

  const glyphname$1y = 'diesisGenikiBelow';
  const args$1y = { color: CssVars.ColorAccidental };

  class DiesisGenikiBelow extends BaseMark {
    constructor() {
      super(glyphname$1y, args$1y);
    }
  }

  const glyphname$1x = 'diesisGenikiSecondary';
  const args$1x = { color: CssVars.ColorAccidental };

  class DiesisGenikiSecondary extends BaseMark {
    constructor() {
      super(glyphname$1x, args$1x);
    }
  }

  const glyphname$1w = 'diesisGenikiTertiary';
  const args$1w = { color: CssVars.ColorAccidental };

  class DiesisGenikiTertiary extends BaseMark {
    constructor() {
      super(glyphname$1w, args$1w);
    }
  }

  const glyphname$1v = 'yfesis2';
  const args$1v = { color: CssVars.ColorAccidental };

  class Yfesis2 extends BaseMark {
    constructor() {
      super(glyphname$1v, args$1v);
    }
  }

  const glyphname$1u = 'yfesis4';
  const args$1u = { color: CssVars.ColorAccidental };

  class Yfesis4 extends BaseMark {
    constructor() {
      super(glyphname$1u, args$1u);
    }
  }

  const glyphname$1t = 'yfesis6';
  const args$1t = { color: CssVars.ColorAccidental };

  class Yfesis6 extends BaseMark {
    constructor() {
      super(glyphname$1t, args$1t);
    }
  }

  const glyphname$1s = 'yfesis8';
  const args$1s = { color: CssVars.ColorAccidental };

  class Yfesis8 extends BaseMark {
    constructor() {
      super(glyphname$1s, args$1s);
    }
  }

  const glyphname$1r = 'yfesisGenikiAbove';
  const args$1r = { color: CssVars.ColorAccidental };

  class YfesisGenikiAbove extends BaseMark {
    constructor() {
      super(glyphname$1r, args$1r);
    }
  }

  const glyphname$1q = 'yfesisGenikiBelow';
  const args$1q = { color: CssVars.ColorAccidental };

  class YfesisGenikiBelow extends BaseMark {
    constructor() {
      super(glyphname$1q, args$1q);
    }
  }

  const glyphname$1p = 'diesis2Secondary';
      const args$1p = {color: CssVars.ColorAccidental};

      class Diesis2Secondary extends BaseMark {
      constructor() {
          super(glyphname$1p, args$1p);
      }
      }

  const glyphname$1o = 'diesis4Secondary';
      const args$1o = {color: CssVars.ColorAccidental};

      class Diesis4Secondary extends BaseMark {
      constructor() {
          super(glyphname$1o, args$1o);
      }
      }

  const glyphname$1n = 'diesis6Secondary';
      const args$1n = {color: CssVars.ColorAccidental};

      class Diesis6Secondary extends BaseMark {
      constructor() {
          super(glyphname$1n, args$1n);
      }
      }

  const glyphname$1m = 'diesis8Secondary';
      const args$1m = {color: CssVars.ColorAccidental};

      class Diesis8Secondary extends BaseMark {
      constructor() {
          super(glyphname$1m, args$1m);
      }
      }

  const glyphname$1l = 'diesis2Tertiary';
      const args$1l = {color: CssVars.ColorAccidental};

      class Diesis2Tertiary extends BaseMark {
      constructor() {
          super(glyphname$1l, args$1l);
      }
      }

  const glyphname$1k = 'diesis4Tertiary';
      const args$1k = {color: CssVars.ColorAccidental};

      class Diesis4Tertiary extends BaseMark {
      constructor() {
          super(glyphname$1k, args$1k);
      }
      }

  const glyphname$1j = 'diesis6Tertiary';
      const args$1j = {color: CssVars.ColorAccidental};

      class Diesis6Tertiary extends BaseMark {
      constructor() {
          super(glyphname$1j, args$1j);
      }
      }

  const glyphname$1i = 'diesis8Tertiary';
      const args$1i = {color: CssVars.ColorAccidental};

      class Diesis8Tertiary extends BaseMark {
      constructor() {
          super(glyphname$1i, args$1i);
      }
      }

  const glyphname$1h = 'yfesis2Secondary';
  const args$1h = { color: CssVars.ColorAccidental };

  class Yfesis2Secondary extends BaseMark {
    constructor() {
      super(glyphname$1h, args$1h);
    }
  }

  const glyphname$1g = 'yfesis4Secondary';
  const args$1g = { color: CssVars.ColorAccidental };

  class Yfesis4Secondary extends BaseMark {
    constructor() {
      super(glyphname$1g, args$1g);
    }
  }

  const glyphname$1f = 'yfesis6Secondary';
  const args$1f = { color: CssVars.ColorAccidental };

  class Yfesis6Secondary extends BaseMark {
    constructor() {
      super(glyphname$1f, args$1f);
    }
  }

  const glyphname$1e = 'yfesis8Secondary';
  const args$1e = { color: CssVars.ColorAccidental };

  class Yfesis8Secondary extends BaseMark {
    constructor() {
      super(glyphname$1e, args$1e);
    }
  }

  const glyphname$1d = 'yfesis2Tertiary';
  const args$1d = { color: CssVars.ColorAccidental };

  class Yfesis2Tertiary extends BaseMark {
    constructor() {
      super(glyphname$1d, args$1d);
    }
  }

  const glyphname$1c = 'yfesis4Tertiary';
  const args$1c = { color: CssVars.ColorAccidental };

  class Yfesis4Tertiary extends BaseMark {
    constructor() {
      super(glyphname$1c, args$1c);
    }
  }

  const glyphname$1b = 'yfesis6Tertiary';
  const args$1b = { color: CssVars.ColorAccidental };

  class Yfesis6Tertiary extends BaseMark {
    constructor() {
      super(glyphname$1b, args$1b);
    }
  }

  const glyphname$1a = 'yfesis8Tertiary';
  const args$1a = { color: CssVars.ColorAccidental };

  class Yfesis8Tertiary extends BaseMark {
    constructor() {
      super(glyphname$1a, args$1a);
    }
  }

  const glyphname$19 = 'yfesisGenikiSecondary';
  const args$19 = { color: CssVars.ColorAccidental };

  class YfesisGenikiSecondary extends BaseMark {
    constructor() {
      super(glyphname$19, args$19);
    }
  }

  const glyphname$18 = 'yfesisGenikiTertiary';
  const args$18 = { color: CssVars.ColorAccidental };

  class YfesisGenikiTertiary extends BaseMark {
    constructor() {
      super(glyphname$18, args$18);
    }
  }

  const glyphname$17 = 'barlineSingle';
  const args$17 = { color: CssVars.ColorBarline };

  class BarlineSingle extends BaseBody {
    constructor() {
      super(glyphname$17, args$17);
    }
  }

  const glyphname$16 = 'barlineDouble';
  const args$16 = { color: CssVars.ColorBarline };

  class BarlineDouble extends BaseBody {
    constructor() {
      super(glyphname$16, args$16);
    }
  }

  const glyphname$15 = 'barlineTheseos';
  const args$15 = { color: CssVars.ColorBarline };

  class BarlineTheseos extends BaseBody {
    constructor() {
      super(glyphname$15, args$15);
    }
  }

  const glyphname$14 = 'barlineShortSingle';
  const args$14 = { color: CssVars.ColorBarline };

  class BarlineShortSingle extends BaseBody {
    constructor() {
      super(glyphname$14, args$14);
    }
  }

  const glyphname$13 = 'barlineShortDouble';
  const args$13 = { color: CssVars.ColorBarline };

  class BarlineShortDouble extends BaseBody {
    constructor() {
      super(glyphname$13, args$13);
    }
  }

  const glyphname$12 = 'barlineShortTheseos';
  const args$12 = { color: CssVars.ColorBarline };

  class BarlineShortTheseos extends BaseBody {
    constructor() {
      super(glyphname$12, args$12);
    }
  }

  const glyphname$11 = 'barlineSingleAbove';
      const args$11 = {color: CssVars.ColorBarline};

      class BarlineSingleAbove extends BaseMark {
      constructor() {
          super(glyphname$11, args$11);
      }
      }

  const glyphname$10 = 'barlineDoubleAbove';
      const args$10 = {color: CssVars.ColorBarline};

      class BarlineDoubleAbove extends BaseMark {
      constructor() {
          super(glyphname$10, args$10);
      }
      }

  const glyphname$$ = 'barlineTheseosAbove';
      const args$$ = {color: CssVars.ColorBarline};

      class BarlineTheseosAbove extends BaseMark {
      constructor() {
          super(glyphname$$, args$$);
      }
      }

  const glyphname$_ = 'barlineShortSingleAbove';
      const args$_ = {color: CssVars.ColorBarline};

      class BarlineShortSingleAbove extends BaseMark {
      constructor() {
          super(glyphname$_, args$_);
      }
      }

  const glyphname$Z = 'barlineShortDoubleAbove';
      const args$Z = {color: CssVars.ColorBarline};

      class BarlineShortDoubleAbove extends BaseMark {
      constructor() {
          super(glyphname$Z, args$Z);
      }
      }

  const glyphname$Y = 'barlineShortTheseosAbove';
      const args$Y = {color: CssVars.ColorBarline};

      class BarlineShortTheseosAbove extends BaseMark {
      constructor() {
          super(glyphname$Y, args$Y);
      }
      }

  const glyphname$X = 'measureNumber2';
  const args$X = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber2 extends BaseMark {
    constructor() {
      super(glyphname$X, args$X);
    }
  }

  const glyphname$W = 'measureNumber3';
  const args$W = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber3 extends BaseMark {
    constructor() {
      super(glyphname$W, args$W);
    }
  }

  const glyphname$V = 'measureNumber4';
  const args$V = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber4 extends BaseMark {
    constructor() {
      super(glyphname$V, args$V);
    }
  }

  const glyphname$U = 'measureNumber5';
  const args$U = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber5 extends BaseMark {
    constructor() {
      super(glyphname$U, args$U);
    }
  }

  const glyphname$T = 'measureNumber6';
  const args$T = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber6 extends BaseMark {
    constructor() {
      super(glyphname$T, args$T);
    }
  }

  const glyphname$S = 'measureNumber7';
  const args$S = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber7 extends BaseMark {
    constructor() {
      super(glyphname$S, args$S);
    }
  }

  const glyphname$R = 'measureNumber8';
  const args$R = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber8 extends BaseMark {
    constructor() {
      super(glyphname$R, args$R);
    }
  }

  const glyphname$Q = 'noteIndicatorNi';
  const args$Q = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorNi extends BaseMark {
    constructor() {
      super(glyphname$Q, args$Q);
    }
  }

  const glyphname$P = 'noteIndicatorPa';
  const args$P = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorPa extends BaseMark {
    constructor() {
      super(glyphname$P, args$P);
    }
  }

  const glyphname$O = 'noteIndicatorVou';
  const args$O = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorVou extends BaseMark {
    constructor() {
      super(glyphname$O, args$O);
    }
  }

  const glyphname$N = 'noteIndicatorGa';
  const args$N = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorGa extends BaseMark {
    constructor() {
      super(glyphname$N, args$N);
    }
  }

  const glyphname$M = 'noteIndicatorDi';
  const args$M = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorDi extends BaseMark {
    constructor() {
      super(glyphname$M, args$M);
    }
  }

  const glyphname$L = 'noteIndicatorKe';
  const args$L = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorKe extends BaseMark {
    constructor() {
      super(glyphname$L, args$L);
    }
  }

  const glyphname$K = 'noteIndicatorZo';
  const args$K = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorZo extends BaseMark {
    constructor() {
      super(glyphname$K, args$K);
    }
  }

  const glyphname$J = 'isonIndicatorUnison';
  const args$J = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorUnison extends BaseMark {
    constructor() {
      super(glyphname$J, args$J);
    }
  }

  const glyphname$I = 'isonIndicatorDiLow';
  const args$I = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorDiLow extends BaseMark {
    constructor() {
      super(glyphname$I, args$I);
    }
  }

  const glyphname$H = 'isonIndicatorKeLow';
  const args$H = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorKeLow extends BaseMark {
    constructor() {
      super(glyphname$H, args$H);
    }
  }

  const glyphname$G = 'isonIndicatorZo';
  const args$G = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorZo extends BaseMark {
    constructor() {
      super(glyphname$G, args$G);
    }
  }

  const glyphname$F = 'isonIndicatorNi';
  const args$F = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorNi extends BaseMark {
    constructor() {
      super(glyphname$F, args$F);
    }
  }

  const glyphname$E = 'isonIndicatorPa';
  const args$E = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorPa extends BaseMark {
    constructor() {
      super(glyphname$E, args$E);
    }
  }

  const glyphname$D = 'isonIndicatorVou';
  const args$D = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorVou extends BaseMark {
    constructor() {
      super(glyphname$D, args$D);
    }
  }

  const glyphname$C = 'isonIndicatorGa';
  const args$C = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorGa extends BaseMark {
    constructor() {
      super(glyphname$C, args$C);
    }
  }

  const glyphname$B = 'isonIndicatorDi';
  const args$B = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorDi extends BaseMark {
    constructor() {
      super(glyphname$B, args$B);
    }
  }

  const glyphname$A = 'isonIndicatorKe';
  const args$A = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorKe extends BaseMark {
    constructor() {
      super(glyphname$A, args$A);
    }
  }

  const glyphname$z = 'isonIndicatorZoHigh';
  const args$z = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorZoHigh extends BaseMark {
    constructor() {
      super(glyphname$z, args$z);
    }
  }

  const glyphname$y = 'gorthmikon';
  const args$y = {};

  class Gorthmikon extends BaseBody {
    constructor() {
      super(glyphname$y, args$y);
    }
  }

  const glyphname$x = 'pelastikon';
  const args$x = {};

  class Pelastikon extends BaseBody {
    constructor() {
      super(glyphname$x, args$x);
    }
  }

  const glyphname$w = 'modeFirst';
  const args$w = {};

  class ModeFirst extends BaseBody {
    constructor() {
      super(glyphname$w, args$w);
    }
  }

  const glyphname$v = 'modeSecond';
  const args$v = {};

  class ModeSecond extends BaseBody {
    constructor() {
      super(glyphname$v, args$v);
    }
  }

  const glyphname$u = 'modeThird';
  const args$u = {};

  class ModeThird extends BaseBody {
    constructor() {
      super(glyphname$u, args$u);
    }
  }

  const glyphname$t = 'modeThirdNana';
  const args$t = {};

  class ModeThirdNana extends BaseBody {
    constructor() {
      super(glyphname$t, args$t);
    }
  }

  const glyphname$s = 'modeFourth';
  const args$s = {};

  class ModeFourth extends BaseBody {
    constructor() {
      super(glyphname$s, args$s);
    }
  }

  const glyphname$r = 'modeLegetos';
  const args$r = {};

  class ModeLegetos extends BaseBody {
    constructor() {
      super(glyphname$r, args$r);
    }
  }

  const glyphname$q = 'modePlagalFirst';
  const args$q = {};

  class ModePlagalFirst extends BaseBody {
    constructor() {
      super(glyphname$q, args$q);
    }
  }

  const glyphname$p = 'modePlagalSecond';
  const args$p = {};

  class ModePlagalSecond extends BaseBody {
    constructor() {
      super(glyphname$p, args$p);
    }
  }

  const glyphname$o = 'modeVarys';
  const args$o = {};

  class ModeVarys extends BaseBody {
    constructor() {
      super(glyphname$o, args$o);
    }
  }

  const glyphname$n = 'modeVarys2';
  const args$n = {};

  class ModeVarys2 extends BaseBody {
    constructor() {
      super(glyphname$n, args$n);
    }
  }

  const glyphname$m = 'modePlagalFourth';
  const args$m = {};

  class ModePlagalFourth extends BaseBody {
    constructor() {
      super(glyphname$m, args$m);
    }
  }

  const glyphname$l = 'modeNi';
  const args$l = {};

  class ModeNi extends BaseBody {
    constructor() {
      super(glyphname$l, args$l);
    }
  }

  const glyphname$k = 'modePa';
  const args$k = {};

  class ModePa extends BaseBody {
    constructor() {
      super(glyphname$k, args$k);
    }
  }

  const glyphname$j = 'modeVou';
  const args$j = {};

  class ModeVou extends BaseBody {
    constructor() {
      super(glyphname$j, args$j);
    }
  }

  const glyphname$i = 'modeGa';
  const args$i = {};

  class ModeGa extends BaseBody {
    constructor() {
      super(glyphname$i, args$i);
    }
  }

  const glyphname$h = 'modeDi';
  const args$h = {};

  class ModeDi extends BaseBody {
    constructor() {
      super(glyphname$h, args$h);
    }
  }

  const glyphname$g = 'modeKe';
  const args$g = {};

  class ModeKe extends BaseBody {
    constructor() {
      super(glyphname$g, args$g);
    }
  }

  const glyphname$f = 'modeZo';
  const args$f = {};

  class ModeZo extends BaseBody {
    constructor() {
      super(glyphname$f, args$f);
    }
  }

  const glyphname$e = 'modeOligonKentimaAbove';
  const args$e = {};

  class ModeOligonKentimaAbove extends BaseMark {
    constructor() {
      super(glyphname$e, args$e);
    }
  }

  const glyphname$d = 'modeOligonYpsili';
  const args$d = {};

  class ModeOligonYpsili extends BaseMark {
    constructor() {
      super(glyphname$d, args$d);
    }
  }

  const glyphname$c = 'modeElafron';
  const args$c = {};

  class ModeElafron extends BaseMark {
    constructor() {
      super(glyphname$c, args$c);
    }
  }

  const glyphname$b = 'modeRunningElafron';
  const args$b = {};

  class ModeRunningElafron extends BaseMark {
    constructor() {
      super(glyphname$b, args$b);
    }
  }

  const glyphname$a = 'modePlagal';
  const args$a = {};

  class ModePlagal extends BaseBody {
    constructor() {
      super(glyphname$a, args$a);
    }
  }

  const glyphname$9 = 'modeWordEchos';
  const args$9 = {};

  class ModeWordEchos extends BaseBody {
    constructor() {
      super(glyphname$9, args$9);
    }
  }

  const glyphname$8 = 'modeWordVarys';
  const args$8 = {};

  class ModeWordVarys extends BaseBody {
    constructor() {
      super(glyphname$8, args$8);
    }
  }

  const glyphname$7 = 'modeAlpha';
  const args$7 = {};

  class ModeAlpha extends BaseBody {
    constructor() {
      super(glyphname$7, args$7);
    }
  }

  const glyphname$6 = 'modeBeta';
  const args$6 = {};

  class ModeBeta extends BaseBody {
    constructor() {
      super(glyphname$6, args$6);
    }
  }

  const glyphname$5 = 'modeGamma';
  const args$5 = {};

  class ModeGamma extends BaseBody {
    constructor() {
      super(glyphname$5, args$5);
    }
  }

  const glyphname$4 = 'modeDelta';
  const args$4 = {};

  class ModeDelta extends BaseBody {
    constructor() {
      super(glyphname$4, args$4);
    }
  }

  const glyphname$3 = 'modeAlphaCapital';
  const args$3 = {};

  class ModeAlphaCapital extends BaseBody {
    constructor() {
      super(glyphname$3, args$3);
    }
  }

  const glyphname$2 = 'modeBetaCapital';
  const args$2 = {};

  class ModeBetaCapital extends BaseBody {
    constructor() {
      super(glyphname$2, args$2);
    }
  }

  const glyphname$1 = 'modeGammaCapital';
  const args$1 = {};

  class ModeGammaCapital extends BaseBody {
    constructor() {
      super(glyphname$1, args$1);
    }
  }

  const glyphname = 'modeDeltaCapital';
  const args = {};

  class ModeDeltaCapital extends BaseBody {
    constructor() {
      super(glyphname, args);
    }
  }

  function defineCustomElementsCharactersBodyCodegen() {
    customElements.define('x-ison', Ison);
    customElements.define('x-oligon', Oligon);
    customElements.define('x-oligon-kentima-middle', OligonKentimaMiddle);
    customElements.define('x-oligon-kentima-below', OligonKentimaBelow);
    customElements.define('x-oligon-kentima-above', OligonKentimaAbove);
    customElements.define('x-oligon-ypsili-right', OligonYpsiliRight);
    customElements.define('x-oligon-ypsili-left', OligonYpsiliLeft);
    customElements.define(
      'x-oligon-kentima-ypsili-right',
      OligonKentimaYpsiliRight,
    );
    customElements.define(
      'x-oligon-kentima-ypsili-middle',
      OligonKentimaYpsiliMiddle,
    );
    customElements.define('x-oligon-double-ypsili', OligonDoubleYpsili);
    customElements.define(
      'x-oligon-kentimata-double-ypsili',
      OligonKentimataDoubleYpsili,
    );
    customElements.define(
      'x-oligon-kentima-double-ypsili-right',
      OligonKentimaDoubleYpsiliRight,
    );
    customElements.define(
      'x-oligon-kentima-double-ypsili-left',
      OligonKentimaDoubleYpsiliLeft,
    );
    customElements.define('x-oligon-triple-ypsili', OligonTripleYpsili);
    customElements.define(
      'x-oligon-kentimata-triple-ypsili',
      OligonKentimataTripleYpsili,
    );
    customElements.define(
      'x-oligon-kentima-triple-ypsili',
      OligonKentimaTripleYpsili,
    );
    customElements.define('x-oligon-ison', OligonIson);
    customElements.define('x-oligon-apostrofos', OligonApostrofos);
    customElements.define('x-oligon-yporroi', OligonYporroi);
    customElements.define('x-oligon-elafron', OligonElafron);
    customElements.define('x-oligon-elafron-apostrofos', OligonElafronApostrofos);
    customElements.define('x-oligon-chamili', OligonChamili);
    customElements.define('x-ison-apostrofos', IsonApostrofos);
    customElements.define('x-apostrofos', Apostrofos);
    customElements.define('x-apostrofos-syndesmos', ApostrofosSyndesmos);
    customElements.define('x-yporroi', Yporroi);
    customElements.define('x-elafron', Elafron);
    customElements.define('x-running-elafron', RunningElafron);
    customElements.define('x-elafron-apostrofos', ElafronApostrofos);
    customElements.define('x-chamili', Chamili);
    customElements.define('x-chamili-apostrofos', ChamiliApostrofos);
    customElements.define('x-chamili-elafron', ChamiliElafron);
    customElements.define(
      'x-chamili-elafron-apostrofos',
      ChamiliElafronApostrofos,
    );
    customElements.define('x-double-chamili', DoubleChamili);
    customElements.define('x-double-chamili-apostrofos', DoubleChamiliApostrofos);
    customElements.define('x-double-chamili-elafron', DoubleChamiliElafron);
    customElements.define(
      'x-double-chamili-elafron-apostrofos',
      DoubleChamiliElafronApostrofos,
    );
    customElements.define('x-triple-chamili', TripleChamili);
    customElements.define('x-petasti-ison', PetastiIson);
    customElements.define('x-petasti', Petasti);
    customElements.define('x-petasti-oligon', PetastiOligon);
    customElements.define('x-petasti-kentima', PetastiKentima);
    customElements.define('x-petasti-ypsili-right', PetastiYpsiliRight);
    customElements.define('x-petasti-ypsili-left', PetastiYpsiliLeft);
    customElements.define(
      'x-petasti-kentima-ypsili-right',
      PetastiKentimaYpsiliRight,
    );
    customElements.define(
      'x-petasti-kentima-ypsili-middle',
      PetastiKentimaYpsiliMiddle,
    );
    customElements.define('x-petasti-double-ypsili', PetastiDoubleYpsili);
    customElements.define(
      'x-petasti-kentimata-double-ypsili',
      PetastiKentimataDoubleYpsili,
    );
    customElements.define(
      'x-petasti-kentima-double-ypsili-right',
      PetastiKentimaDoubleYpsiliRight,
    );
    customElements.define(
      'x-petasti-kentima-double-ypsili-left',
      PetastiKentimaDoubleYpsiliLeft,
    );
    customElements.define('x-petasti-triple-ypsili', PetastiTripleYpsili);
    customElements.define(
      'x-petasti-kentimata-triple-ypsili',
      PetastiKentimataTripleYpsili,
    );
    customElements.define(
      'x-petasti-kentima-triple-ypsili',
      PetastiKentimaTripleYpsili,
    );
    customElements.define('x-petasti-apostrofos', PetastiApostrofos);
    customElements.define('x-petasti-yporroi', PetastiYporroi);
    customElements.define('x-petasti-elafron', PetastiElafron);
    customElements.define('x-petasti-running-elafron', PetastiRunningElafron);
    customElements.define(
      'x-petasti-elafron-apostrofos',
      PetastiElafronApostrofos,
    );
    customElements.define('x-petasti-chamili', PetastiChamili);
    customElements.define(
      'x-petasti-chamili-apostrofos',
      PetastiChamiliApostrofos,
    );
    customElements.define('x-petasti-chamili-elafron', PetastiChamiliElafron);
    customElements.define(
      'x-petasti-chamili-elafron-apostrofos',
      PetastiChamiliElafronApostrofos,
    );
    customElements.define('x-petasti-double-chamili', PetastiDoubleChamili);
    customElements.define(
      'x-petasti-double-chamili-apostrofos',
      PetastiDoubleChamiliApostrofos,
    );
    customElements.define('x-kentima', Kentima);
    customElements.define('x-kentimata', Kentimata);
    customElements.define('x-oligon-kentimata-below', OligonKentimataBelow);
    customElements.define('x-oligon-kentimata-above', OligonKentimataAbove);
    customElements.define('x-oligon-ison-kentimata', OligonIsonKentimata);
    customElements.define(
      'x-oligon-kentima-middle-kentimata',
      OligonKentimaMiddleKentimata,
    );
    customElements.define(
      'x-oligon-ypsili-right-kentimata',
      OligonYpsiliRightKentimata,
    );
    customElements.define(
      'x-oligon-ypsili-left-kentimata',
      OligonYpsiliLeftKentimata,
    );
    customElements.define(
      'x-oligon-apostrofos-kentimata',
      OligonApostrofosKentimata,
    );
    customElements.define('x-oligon-yporroi-kentimata', OligonYporroiKentimata);
    customElements.define('x-oligon-elafron-kentimata', OligonElafronKentimata);
    customElements.define(
      'x-oligon-running-elafron-kentimata',
      OligonRunningElafronKentimata,
    );
    customElements.define(
      'x-oligon-elafron-apostrofos-kentimata',
      OligonElafronApostrofosKentimata,
    );
    customElements.define('x-oligon-chamili-kentimata', OligonChamiliKentimata);

    customElements.define('x-vareia', Vareia);

    customElements.define('x-agogi-poli-argi', AgogiPoliArgi);
    customElements.define('x-agogi-argoteri', AgogiArgoteri);
    customElements.define('x-agogi-argi', AgogiArgi);
    customElements.define('x-agogi-metria', AgogiMetria);
    customElements.define('x-agogi-mesi', AgogiMesi);
    customElements.define('x-agogi-gorgi', AgogiGorgi);
    customElements.define('x-agogi-gorgoteri', AgogiGorgoteri);
    customElements.define('x-agogi-poli-gorgi', AgogiPoliGorgi);

    customElements.define('x-stavros', Stavros);
    customElements.define('x-stavros-above', StavrosAbove);
    customElements.define('x-breath', Breath);

    customElements.define('x-leimma1', Leimma1);
    customElements.define('x-leimma2', Leimma2);
    customElements.define('x-leimma3', Leimma3);
    customElements.define('x-leimma4', Leimma4);

    customElements.define('x-martyria-note-zo-low', MartyriaNoteZoLow);
    customElements.define('x-martyria-note-ni-low', MartyriaNoteNiLow);
    customElements.define('x-martyria-note-pa-low', MartyriaNotePaLow);
    customElements.define('x-martyria-note-vou-low', MartyriaNoteVouLow);
    customElements.define('x-martyria-note-ga-low', MartyriaNoteGaLow);
    customElements.define('x-martyria-note-di-low', MartyriaNoteDiLow);
    customElements.define('x-martyria-note-ke-low', MartyriaNoteKeLow);
    customElements.define('x-martyria-note-zo', MartyriaNoteZo);
    customElements.define('x-martyria-note-ni', MartyriaNoteNi);
    customElements.define('x-martyria-note-pa', MartyriaNotePa);
    customElements.define('x-martyria-note-vou', MartyriaNoteVou);
    customElements.define('x-martyria-note-ga', MartyriaNoteGa);
    customElements.define('x-martyria-note-di', MartyriaNoteDi);
    customElements.define('x-martyria-note-ke', MartyriaNoteKe);
    customElements.define('x-martyria-note-zo-high', MartyriaNoteZoHigh);
    customElements.define('x-martyria-note-ni-high', MartyriaNoteNiHigh);
    customElements.define('x-martyria-note-pa-high', MartyriaNotePaHigh);
    customElements.define('x-martyria-note-vou-high', MartyriaNoteVouHigh);
    customElements.define('x-martyria-note-ga-high', MartyriaNoteGaHigh);
    customElements.define('x-martyria-note-di-high', MartyriaNoteDiHigh);
    customElements.define('x-martyria-note-ke-high', MartyriaNoteKeHigh);
    customElements.define('x-barline-single', BarlineSingle);
    customElements.define('x-barline-double', BarlineDouble);
    customElements.define('x-barline-theseos', BarlineTheseos);
    customElements.define('x-barline-short-single', BarlineShortSingle);
    customElements.define('x-barline-short-double', BarlineShortDouble);
    customElements.define('x-barline-short-theseos', BarlineShortTheseos);
    customElements.define('x-barline-single-above', BarlineSingleAbove);
    customElements.define('x-barline-double-above', BarlineDoubleAbove);
    customElements.define('x-barline-theseos-above', BarlineTheseosAbove);
    customElements.define(
      'x-barline-short-single-above',
      BarlineShortSingleAbove,
    );
    customElements.define(
      'x-barline-short-double-above',
      BarlineShortDoubleAbove,
    );
    customElements.define(
      'x-barline-short-theseos-above',
      BarlineShortTheseosAbove,
    );
    customElements.define('x-gorthmikon', Gorthmikon);
    customElements.define('x-pelastikon', Pelastikon);
    customElements.define('x-mode-first', ModeFirst);
    customElements.define('x-mode-second', ModeSecond);
    customElements.define('x-mode-third', ModeThird);
    customElements.define('x-mode-third-nana', ModeThirdNana);
    customElements.define('x-mode-fourth', ModeFourth);
    customElements.define('x-mode-legetos', ModeLegetos);
    customElements.define('x-mode-plagal-first', ModePlagalFirst);
    customElements.define('x-mode-plagal-second', ModePlagalSecond);
    customElements.define('x-mode-varys', ModeVarys);
    customElements.define('x-mode-varys2', ModeVarys2);
    customElements.define('x-mode-plagal-fourth', ModePlagalFourth);
    customElements.define('x-mode-ni', ModeNi);
    customElements.define('x-mode-pa', ModePa);
    customElements.define('x-mode-vou', ModeVou);
    customElements.define('x-mode-ga', ModeGa);
    customElements.define('x-mode-di', ModeDi);
    customElements.define('x-mode-ke', ModeKe);
    customElements.define('x-mode-zo', ModeZo);
    customElements.define('x-mode-oligon-kentima-above', ModeOligonKentimaAbove);
    customElements.define('x-mode-oligon-ypsili', ModeOligonYpsili);
    customElements.define('x-mode-elafron', ModeElafron);
    customElements.define('x-mode-running-elafron', ModeRunningElafron);
    customElements.define('x-mode-plagal', ModePlagal);
    customElements.define('x-mode-word-echos', ModeWordEchos);
    customElements.define('x-mode-word-varys', ModeWordVarys);
    customElements.define('x-mode-alpha', ModeAlpha);
    customElements.define('x-mode-beta', ModeBeta);
    customElements.define('x-mode-gamma', ModeGamma);
    customElements.define('x-mode-delta', ModeDelta);
    customElements.define('x-mode-alpha-capital', ModeAlphaCapital);
    customElements.define('x-mode-beta-capital', ModeBetaCapital);
    customElements.define('x-mode-gamma-capital', ModeGammaCapital);
    customElements.define('x-mode-delta-capital', ModeDeltaCapital);
  }

  function defineCustomElementsCharactersMarkCodegen() {
    customElements.define('x-psifiston', Psifiston);
    customElements.define('x-antikenoma', Antikenoma);
    customElements.define('x-omalon', Omalon);
    customElements.define('x-omalon-connecting', OmalonConnecting);
    customElements.define('x-heteron', Heteron);
    customElements.define('x-heteron-connecting', HeteronConnecting);
    customElements.define('x-endofonon', Endofonon);
    customElements.define('x-yfen-above', YfenAbove);
    customElements.define('x-yfen-below', YfenBelow);
    customElements.define('x-klasma-above', KlasmaAbove);
    customElements.define('x-klasma-below', KlasmaBelow);
    customElements.define('x-apli', Apli);
    customElements.define('x-dipli', Dipli);
    customElements.define('x-tripli', Tripli);
    customElements.define('x-tetrapli', Tetrapli);
    customElements.define('x-koronis', Koronis);
    customElements.define('x-leimma-dot', LeimmaDot);
    customElements.define('x-gorgon-above', GorgonAbove);
    customElements.define('x-gorgon-below', GorgonBelow);
    customElements.define('x-gorgon-dotted-left', GorgonDottedLeft);
    customElements.define('x-gorgon-dotted-right', GorgonDottedRight);
    customElements.define('x-digorgon', Digorgon);
    customElements.define(
      'x-digorgon-dotted-left-below',
      DigorgonDottedLeftBelow,
    );
    customElements.define(
      'x-digorgon-dotted-left-above',
      DigorgonDottedLeftAbove,
    );
    customElements.define('x-digorgon-dotted-right', DigorgonDottedRight);
    customElements.define('x-trigorgon', Trigorgon);
    customElements.define(
      'x-trigorgon-dotted-left-below',
      TrigorgonDottedLeftBelow,
    );
    customElements.define(
      'x-trigorgon-dotted-left-above',
      TrigorgonDottedLeftAbove,
    );
    customElements.define('x-trigorgon-dotted-right', TrigorgonDottedRight);
    customElements.define('x-argon', Argon);
    customElements.define('x-diargon', Diargon);
    customElements.define('x-triargon', Triargon);
    customElements.define('x-gorgon-secondary', GorgonSecondary);
    customElements.define(
      'x-gorgon-dotted-left-secondary',
      GorgonDottedLeftSecondary,
    );
    customElements.define(
      'x-gorgon-dotted-right-secondary',
      GorgonDottedRightSecondary,
    );
    customElements.define('x-digorgon-secondary', DigorgonSecondary);
    customElements.define(
      'x-digorgon-dotted-left-below-secondary',
      DigorgonDottedLeftBelowSecondary,
    );
    customElements.define(
      'x-digorgon-dotted-right-secondary',
      DigorgonDottedRightSecondary,
    );
    customElements.define('x-trigorgon-secondary', TrigorgonSecondary);
    customElements.define(
      'x-trigorgon-dotted-left-below-secondary',
      TrigorgonDottedLeftBelowSecondary,
    );
    customElements.define(
      'x-trigorgon-dotted-right-secondary',
      TrigorgonDottedRightSecondary,
    );
    customElements.define(
      'x-digorgon-dotted-left-secondary',
      DigorgonDottedLeftSecondary,
    );
    customElements.define(
      'x-trigorgon-dotted-left-secondary',
      TrigorgonDottedLeftSecondary,
    );

    customElements.define('x-agogi-poli-argi-above', AgogiPoliArgiAbove);
    customElements.define('x-agogi-argoteri-above', AgogiArgoteriAbove);
    customElements.define('x-agogi-argi-above', AgogiArgiAbove);
    customElements.define('x-agogi-metria-above', AgogiMetriaAbove);
    customElements.define('x-agogi-mesi-above', AgogiMesiAbove);
    customElements.define('x-agogi-gorgi-above', AgogiGorgiAbove);
    customElements.define('x-agogi-gorgoteri-above', AgogiGorgoteriAbove);
    customElements.define('x-agogi-poli-gorgi-above', AgogiPoliGorgiAbove);

    customElements.define('x-martyria-tick', MartyriaTick);
    customElements.define('x-martyria-zo-below', MartyriaZoBelow);
    customElements.define('x-martyria-delta-below', MartyriaDeltaBelow);
    customElements.define('x-martyria-alpha-below', MartyriaAlphaBelow);
    customElements.define('x-martyria-legetos-below', MartyriaLegetosBelow);
    customElements.define('x-martyria-nana-below', MartyriaNanaBelow);
    customElements.define(
      'x-martyria-delta-dotted-below',
      MartyriaDeltaDottedBelow,
    );
    customElements.define(
      'x-martyria-alpha-dotted-below',
      MartyriaAlphaDottedBelow,
    );
    customElements.define(
      'x-martyria-hard-chromatic-pa-below',
      MartyriaHardChromaticPaBelow,
    );
    customElements.define(
      'x-martyria-hard-chromatic-di-below',
      MartyriaHardChromaticDiBelow,
    );
    customElements.define(
      'x-martyria-soft-chromatic-di-below',
      MartyriaSoftChromaticDiBelow,
    );
    customElements.define(
      'x-martyria-soft-chromatic-ke-below',
      MartyriaSoftChromaticKeBelow,
    );
    customElements.define('x-martyria-zygos-below', MartyriaZygosBelow);
    customElements.define('x-martyria-zo-above', MartyriaZoAbove);
    customElements.define('x-martyria-delta-above', MartyriaDeltaAbove);
    customElements.define('x-martyria-alpha-above', MartyriaAlphaAbove);
    customElements.define('x-martyria-legetos-above', MartyriaLegetosAbove);
    customElements.define('x-martyria-nana-above', MartyriaNanaAbove);
    customElements.define(
      'x-martyria-delta-dotted-above',
      MartyriaDeltaDottedAbove,
    );
    customElements.define(
      'x-martyria-alpha-dotted-above',
      MartyriaAlphaDottedAbove,
    );
    customElements.define(
      'x-martyria-hard-chromatic-pa-above',
      MartyriaHardChromaticPaAbove,
    );
    customElements.define(
      'x-martyria-hard-chromatic-di-above',
      MartyriaHardChromaticDiAbove,
    );
    customElements.define(
      'x-martyria-soft-chromatic-di-above',
      MartyriaSoftChromaticDiAbove,
    );
    customElements.define(
      'x-martyria-soft-chromatic-ke-above',
      MartyriaSoftChromaticKeAbove,
    );
    customElements.define('x-martyria-zygos-above', MartyriaZygosAbove);
    customElements.define(
      'x-fthora-diatonic-ni-low-above',
      FthoraDiatonicNiLowAbove,
    );
    customElements.define('x-fthora-diatonic-pa-above', FthoraDiatonicPaAbove);
    customElements.define('x-fthora-diatonic-vou-above', FthoraDiatonicVouAbove);
    customElements.define('x-fthora-diatonic-ga-above', FthoraDiatonicGaAbove);
    customElements.define('x-fthora-diatonic-di-above', FthoraDiatonicDiAbove);
    customElements.define('x-fthora-diatonic-ke-above', FthoraDiatonicKeAbove);
    customElements.define('x-fthora-diatonic-zo-above', FthoraDiatonicZoAbove);
    customElements.define(
      'x-fthora-diatonic-ni-high-above',
      FthoraDiatonicNiHighAbove,
    );
    customElements.define(
      'x-fthora-hard-chromatic-pa-above',
      FthoraHardChromaticPaAbove,
    );
    customElements.define(
      'x-fthora-hard-chromatic-di-above',
      FthoraHardChromaticDiAbove,
    );
    customElements.define(
      'x-fthora-soft-chromatic-di-above',
      FthoraSoftChromaticDiAbove,
    );
    customElements.define(
      'x-fthora-soft-chromatic-ke-above',
      FthoraSoftChromaticKeAbove,
    );
    customElements.define('x-fthora-enharmonic-above', FthoraEnharmonicAbove);
    customElements.define('x-chroa-zygos-above', ChroaZygosAbove);
    customElements.define('x-chroa-kliton-above', ChroaKlitonAbove);
    customElements.define('x-chroa-spathi-above', ChroaSpathiAbove);
    customElements.define(
      'x-fthora-diatonic-ni-low-secondary',
      FthoraDiatonicNiLowSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-pa-secondary',
      FthoraDiatonicPaSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-vou-secondary',
      FthoraDiatonicVouSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-ga-secondary',
      FthoraDiatonicGaSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-di-secondary',
      FthoraDiatonicDiSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-ke-secondary',
      FthoraDiatonicKeSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-zo-secondary',
      FthoraDiatonicZoSecondary,
    );
    customElements.define(
      'x-fthora-diatonic-ni-high-secondary',
      FthoraDiatonicNiHighSecondary,
    );
    customElements.define(
      'x-fthora-hard-chromatic-pa-secondary',
      FthoraHardChromaticPaSecondary,
    );
    customElements.define(
      'x-fthora-hard-chromatic-di-secondary',
      FthoraHardChromaticDiSecondary,
    );
    customElements.define(
      'x-fthora-soft-chromatic-di-secondary',
      FthoraSoftChromaticDiSecondary,
    );
    customElements.define(
      'x-fthora-soft-chromatic-ke-secondary',
      FthoraSoftChromaticKeSecondary,
    );
    customElements.define(
      'x-fthora-enharmonic-secondary',
      FthoraEnharmonicSecondary,
    );
    customElements.define('x-chroa-zygos-secondary', ChroaZygosSecondary);
    customElements.define('x-chroa-kliton-secondary', ChroaKlitonSecondary);
    customElements.define('x-chroa-spathi-secondary', ChroaSpathiSecondary);
    customElements.define(
      'x-fthora-diatonic-ni-low-tertiary',
      FthoraDiatonicNiLowTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-pa-tertiary',
      FthoraDiatonicPaTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-vou-tertiary',
      FthoraDiatonicVouTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-ga-tertiary',
      FthoraDiatonicGaTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-di-tertiary',
      FthoraDiatonicDiTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-ke-tertiary',
      FthoraDiatonicKeTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-zo-tertiary',
      FthoraDiatonicZoTertiary,
    );
    customElements.define(
      'x-fthora-diatonic-ni-high-tertiary',
      FthoraDiatonicNiHighTertiary,
    );
    customElements.define(
      'x-fthora-hard-chromatic-pa-tertiary',
      FthoraHardChromaticPaTertiary,
    );
    customElements.define(
      'x-fthora-hard-chromatic-di-tertiary',
      FthoraHardChromaticDiTertiary,
    );
    customElements.define(
      'x-fthora-soft-chromatic-di-tertiary',
      FthoraSoftChromaticDiTertiary,
    );
    customElements.define(
      'x-fthora-soft-chromatic-ke-tertiary',
      FthoraSoftChromaticKeTertiary,
    );
    customElements.define(
      'x-fthora-enharmonic-tertiary',
      FthoraEnharmonicTertiary,
    );
    customElements.define('x-chroa-zygos-tertiary', ChroaZygosTertiary);
    customElements.define('x-chroa-kliton-tertiary', ChroaKlitonTertiary);
    customElements.define('x-chroa-spathi-tertiary', ChroaSpathiTertiary);
    customElements.define(
      'x-fthora-diatonic-ni-low-below',
      FthoraDiatonicNiLowBelow,
    );
    customElements.define('x-fthora-diatonic-pa-below', FthoraDiatonicPaBelow);
    customElements.define('x-fthora-diatonic-vou-below', FthoraDiatonicVouBelow);
    customElements.define('x-fthora-diatonic-ga-below', FthoraDiatonicGaBelow);
    customElements.define('x-fthora-diatonic-di-below', FthoraDiatonicDiBelow);
    customElements.define('x-fthora-diatonic-ke-below', FthoraDiatonicKeBelow);
    customElements.define('x-fthora-diatonic-zo-below', FthoraDiatonicZoBelow);
    customElements.define(
      'x-fthora-diatonic-ni-high-below',
      FthoraDiatonicNiHighBelow,
    );
    customElements.define(
      'x-fthora-hard-chromatic-pa-below',
      FthoraHardChromaticPaBelow,
    );
    customElements.define(
      'x-fthora-hard-chromatic-di-below',
      FthoraHardChromaticDiBelow,
    );
    customElements.define(
      'x-fthora-soft-chromatic-di-below',
      FthoraSoftChromaticDiBelow,
    );
    customElements.define(
      'x-fthora-soft-chromatic-ke-below',
      FthoraSoftChromaticKeBelow,
    );
    customElements.define('x-fthora-enharmonic-below', FthoraEnharmonicBelow);
    customElements.define('x-chroa-zygos-below', ChroaZygosBelow);
    customElements.define('x-chroa-kliton-below', ChroaKlitonBelow);
    customElements.define('x-chroa-spathi-below', ChroaSpathiBelow);
    customElements.define('x-diesis-2', Diesis2);
    customElements.define('x-diesis-4', Diesis4);
    customElements.define('x-diesis-6', Diesis6);
    customElements.define('x-diesis-8', Diesis8);
    customElements.define('x-diesis-geniki-above', DiesisGenikiAbove);
    customElements.define('x-diesis-geniki-below', DiesisGenikiBelow);
    customElements.define('x-diesis-geniki-secondary', DiesisGenikiSecondary);
    customElements.define('x-diesis-geniki-tertiary', DiesisGenikiTertiary);
    customElements.define('x-yfesis-2', Yfesis2);
    customElements.define('x-yfesis-4', Yfesis4);
    customElements.define('x-yfesis-6', Yfesis6);
    customElements.define('x-yfesis-8', Yfesis8);
    customElements.define('x-yfesis-geniki-above', YfesisGenikiAbove);
    customElements.define('x-yfesis-geniki-below', YfesisGenikiBelow);
    customElements.define('x-diesis-2-secondary', Diesis2Secondary);
    customElements.define('x-diesis-4-secondary', Diesis4Secondary);
    customElements.define('x-diesis-6-secondary', Diesis6Secondary);
    customElements.define('x-diesis-8-secondary', Diesis8Secondary);
    customElements.define('x-diesis-2-tertiary', Diesis2Tertiary);
    customElements.define('x-diesis-4-tertiary', Diesis4Tertiary);
    customElements.define('x-diesis-6-tertiary', Diesis6Tertiary);
    customElements.define('x-diesis-8-tertiary', Diesis8Tertiary);
    customElements.define('x-yfesis-2-secondary', Yfesis2Secondary);
    customElements.define('x-yfesis-4-secondary', Yfesis4Secondary);
    customElements.define('x-yfesis-6-secondary', Yfesis6Secondary);
    customElements.define('x-yfesis-8-secondary', Yfesis8Secondary);
    customElements.define('x-yfesis-2-tertiary', Yfesis2Tertiary);
    customElements.define('x-yfesis-4-tertiary', Yfesis4Tertiary);
    customElements.define('x-yfesis-6-tertiary', Yfesis6Tertiary);
    customElements.define('x-yfesis-8-tertiary', Yfesis8Tertiary);
    customElements.define('x-yfesis-geniki-secondary', YfesisGenikiSecondary);
    customElements.define('x-yfesis-geniki-tertiary', YfesisGenikiTertiary);

    customElements.define('x-measure-number-2', MeasureNumber2);
    customElements.define('x-measure-number-3', MeasureNumber3);
    customElements.define('x-measure-number-4', MeasureNumber4);
    customElements.define('x-measure-number-5', MeasureNumber5);
    customElements.define('x-measure-number-6', MeasureNumber6);
    customElements.define('x-measure-number-7', MeasureNumber7);
    customElements.define('x-measure-number-8', MeasureNumber8);
    customElements.define('x-note-indicator-ni', NoteIndicatorNi);
    customElements.define('x-note-indicator-pa', NoteIndicatorPa);
    customElements.define('x-note-indicator-vou', NoteIndicatorVou);
    customElements.define('x-note-indicator-ga', NoteIndicatorGa);
    customElements.define('x-note-indicator-di', NoteIndicatorDi);
    customElements.define('x-note-indicator-ke', NoteIndicatorKe);
    customElements.define('x-note-indicator-zo', NoteIndicatorZo);
    customElements.define('x-ison-indicator-unison', IsonIndicatorUnison);
    customElements.define('x-ison-indicator-di-low', IsonIndicatorDiLow);
    customElements.define('x-ison-indicator-ke-low', IsonIndicatorKeLow);
    customElements.define('x-ison-indicator-zo', IsonIndicatorZo);
    customElements.define('x-ison-indicator-ni', IsonIndicatorNi);
    customElements.define('x-ison-indicator-pa', IsonIndicatorPa);
    customElements.define('x-ison-indicator-vou', IsonIndicatorVou);
    customElements.define('x-ison-indicator-ga', IsonIndicatorGa);
    customElements.define('x-ison-indicator-di', IsonIndicatorDi);
    customElements.define('x-ison-indicator-ke', IsonIndicatorKe);
    customElements.define('x-ison-indicator-zo-high', IsonIndicatorZoHigh);
  }

  // import { ModeFirst } from '../components/characters/codegen/ModeFirst.js';
  // import { ModeSecond } from '../components/characters/codegen/ModeSecond.js';
  // import { ModeThird } from '../components/characters/codegen/ModeThird.js';
  // import { ModeThirdNana } from '../components/characters/codegen/ModeThirdNana.js';
  // import { ModeFourth } from '../components/characters/codegen/ModeFourth.js';
  // import { ModeLegetos } from '../components/characters/codegen/ModeLegetos.js';
  // import { ModePlagalFirst } from '../components/characters/codegen/ModePlagalFirst.js';
  // import { ModePlagalSecond } from '../components/characters/codegen/ModePlagalSecond.js';
  // import { ModeVarys } from '../components/characters/codegen/ModeVarys.js';
  // import { ModeVarys2 } from '../components/characters/codegen/ModeVarys2.js';
  // import { ModePlagalFourth } from '../components/characters/codegen/ModePlagalFourth.js';
  // import { ModeNi } from '../components/characters/codegen/ModeNi.js';
  // import { ModePa } from '../components/characters/codegen/ModePa.js';
  // import { ModeVou } from '../components/characters/codegen/ModeVou.js';
  // import { ModeGa } from '../components/characters/codegen/ModeGa.js';
  // import { ModeDi } from '../components/characters/codegen/ModeDi.js';
  // import { ModeKe } from '../components/characters/codegen/ModeKe.js';
  // import { ModeZo } from '../components/characters/codegen/ModeZo.js';
  // import { ModeOligonKentimaAbove } from '../components/characters/codegen/ModeOligonKentimaAbove.js';
  // import { ModeOligonYpsili } from '../components/characters/codegen/ModeOligonYpsili.js';
  // import { ModeElafron } from '../components/characters/codegen/ModeElafron.js';
  // import { ModeRunningElafron } from '../components/characters/codegen/ModeRunningElafron.js';
  // import { ModePlagal } from '../components/characters/codegen/ModePlagal.js';
  // import { ModeWordEchos } from '../components/characters/codegen/ModeWordEchos.js';
  // import { ModeWordVarys } from '../components/characters/codegen/ModeWordVarys.js';
  // import { ModeAlpha } from '../components/characters/codegen/ModeAlpha.js';
  // import { ModeBeta } from '../components/characters/codegen/ModeBeta.js';
  // import { ModeGamma } from '../components/characters/codegen/ModeGamma.js';
  // import { ModeDelta } from '../components/characters/codegen/ModeDelta.js';
  // import { ModeAlphaCapital } from '../components/characters/codegen/ModeAlphaCapital.js';
  // import { ModeBetaCapital } from '../components/characters/codegen/ModeBetaCapital.js';
  // import { ModeGammaCapital } from '../components/characters/codegen/ModeGammaCapital.js';
  // import { ModeDeltaCapital } from '../components/characters/codegen/ModeDeltaCapital.js';

  function defineCustomElementsCharactersBodyAliases() {
    customElements.define('x-i', class extends Ison {});
    customElements.define('x-o', class extends Oligon {});
    customElements.define('x-o1', class extends Oligon {});
    customElements.define('x-o2-m', class extends OligonKentimaMiddle {});
    customElements.define('x-o2', class extends OligonKentimaBelow {});
    customElements.define('x-o3', class extends OligonKentimaAbove {});
    customElements.define('x-o4', class extends OligonYpsiliRight {});
    customElements.define('x-o5', class extends OligonYpsiliLeft {});
    customElements.define('x-o6', class extends OligonKentimaYpsiliRight {});
    customElements.define('x-o7', class extends OligonKentimaYpsiliMiddle {});
    customElements.define('x-o8', class extends OligonDoubleYpsili {});
    customElements.define('x-o9', class extends OligonKentimataDoubleYpsili {});
    customElements.define(
      'x-o10',
      class extends OligonKentimaDoubleYpsiliRight {},
    );
    customElements.define(
      'x-o11',
      class extends OligonKentimaDoubleYpsiliLeft {},
    );
    customElements.define('x-o12', class extends OligonTripleYpsili {});
    customElements.define('x-o13', class extends OligonKentimataTripleYpsili {});
    customElements.define('x-o14', class extends OligonKentimaTripleYpsili {});
    customElements.define('x-o-i', class extends OligonIson {});
    customElements.define('x-o-a', class extends OligonApostrofos {});
    customElements.define('x-o-y', class extends OligonYporroi {});
    customElements.define('x-o-e', class extends OligonElafron {});
    customElements.define('x-o-ea', class extends OligonElafronApostrofos {});
    customElements.define('x-o-ch', class extends OligonChamili {});
    customElements.define('x-i-a', class extends IsonApostrofos {});
    customElements.define('x-a', class extends Apostrofos {});
    customElements.define('x-aa', class extends ApostrofosSyndesmos {});
    customElements.define('x-y', class extends Yporroi {});
    customElements.define('x-e', class extends Elafron {});
    customElements.define('x-re', class extends RunningElafron {});
    customElements.define('x-ea', class extends ElafronApostrofos {});
    customElements.define('x-ch', class extends Chamili {});
    customElements.define('x-ch4', class extends Chamili {});
    customElements.define('x-ch5', class extends ChamiliApostrofos {});
    customElements.define('x-ch6', class extends ChamiliElafron {});
    customElements.define('x-ch7', class extends ChamiliElafronApostrofos {});
    customElements.define('x-ch8', class extends DoubleChamili {});
    customElements.define('x-ch9', class extends DoubleChamiliApostrofos {});
    customElements.define('x-ch10', class extends DoubleChamiliElafron {});
    customElements.define(
      'x-ch11',
      class extends DoubleChamiliElafronApostrofos {},
    );
    customElements.define('x-ch12', class extends TripleChamili {});
    customElements.define('x-p0', class extends PetastiIson {});
    customElements.define('x-p-i', class extends PetastiIson {});
    customElements.define('x-p', class extends Petasti {});
    customElements.define('x-p1', class extends Petasti {});
    customElements.define('x-p2', class extends PetastiOligon {});
    customElements.define('x-p3', class extends PetastiKentima {});
    customElements.define('x-p4', class extends PetastiYpsiliRight {});
    customElements.define('x-p5', class extends PetastiYpsiliLeft {});
    customElements.define('x-p6', class extends PetastiKentimaYpsiliRight {});
    customElements.define('x-p7', class extends PetastiKentimaYpsiliMiddle {});
    customElements.define('x-p8', class extends PetastiDoubleYpsili {});
    customElements.define('x-p9', class extends PetastiKentimataDoubleYpsili {});
    customElements.define(
      'x-p10',
      class extends PetastiKentimaDoubleYpsiliRight {},
    );
    customElements.define(
      'x-p11',
      class extends PetastiKentimaDoubleYpsiliLeft {},
    );
    customElements.define('x-p12', class extends PetastiTripleYpsili {});
    customElements.define('x-p13', class extends PetastiKentimataTripleYpsili {});
    customElements.define('x-p14', class extends PetastiKentimaTripleYpsili {});
    customElements.define('x-p-a', class extends PetastiApostrofos {});
    customElements.define('x-p-y', class extends PetastiYporroi {});
    customElements.define('x-p-e', class extends PetastiElafron {});
    customElements.define('x-p-re', class extends PetastiRunningElafron {});
    customElements.define('x-p-ea', class extends PetastiElafronApostrofos {});
    customElements.define('x-p-ch', class extends PetastiChamili {});
    customElements.define('x-p-ch4', class extends PetastiChamili {});
    customElements.define('x-p-ch5', class extends PetastiChamiliApostrofos {});
    customElements.define('x-p-ch6', class extends PetastiChamiliElafron {});
    customElements.define(
      'x-p-ch7',
      class extends PetastiChamiliElafronApostrofos {},
    );
    customElements.define('x-p-ch8', class extends PetastiDoubleChamili {});
    customElements.define(
      'x-p-ch9',
      class extends PetastiDoubleChamiliApostrofos {},
    );
    // customElements.define('x-kentima', class extends Kentima {});
    customElements.define('x-k', class extends Kentimata {});
    customElements.define('x-ko', class extends OligonKentimataBelow {});
    customElements.define('x-ok', class extends OligonKentimataAbove {});
    customElements.define('x-o-i-k', class extends OligonIsonKentimata {});
    customElements.define(
      'x-o2-m-k',
      class extends OligonKentimaMiddleKentimata {},
    );
    customElements.define('x-o4-k', class extends OligonYpsiliRightKentimata {});
    customElements.define('x-o5-k', class extends OligonYpsiliLeftKentimata {});
    customElements.define('x-o-a-k', class extends OligonApostrofosKentimata {});
    customElements.define('x-o-y-k', class extends OligonYporroiKentimata {});
    customElements.define('x-o-e-k', class extends OligonElafronKentimata {});
    customElements.define(
      'x-o-re-k',
      class extends OligonRunningElafronKentimata {},
    );
    customElements.define(
      'x-o-ea-k',
      class extends OligonElafronApostrofosKentimata {},
    );
    customElements.define('x-o-ch-k', class extends OligonChamiliKentimata {});

    customElements.define('x-var', class extends Vareia {});

    // customElements.define('x-stavros', class extends Stavros {});
    // customElements.define('x-breath', class extends Breath {});
    customElements.define('x-l1', class extends Leimma1 {});
    customElements.define('x-l2', class extends Leimma2 {});
    customElements.define('x-l3', class extends Leimma3 {});
    customElements.define('x-l4', class extends Leimma4 {});

    customElements.define('x-t1', class extends AgogiPoliArgi {});
    customElements.define('x-t2', class extends AgogiArgoteri {});
    customElements.define('x-t3', class extends AgogiArgi {});
    customElements.define('x-t4', class extends AgogiMetria {});
    customElements.define('x-t5', class extends AgogiMesi {});
    customElements.define('x-t6', class extends AgogiGorgi {});
    customElements.define('x-t7', class extends AgogiGorgoteri {});
    customElements.define('x-t8', class extends AgogiPoliGorgi {});
    customElements.define('x-m-zo-low', class extends MartyriaNoteZoLow {});
    customElements.define('x-m-ni-low', class extends MartyriaNoteNiLow {});
    customElements.define('x-m-pa-low', class extends MartyriaNotePaLow {});
    customElements.define('x-m-vou-low', class extends MartyriaNoteVouLow {});
    customElements.define('x-m-ga-low', class extends MartyriaNoteGaLow {});
    customElements.define('x-m-di-low', class extends MartyriaNoteDiLow {});
    customElements.define('x-m-ke-low', class extends MartyriaNoteKeLow {});
    customElements.define('x-m-zo', class extends MartyriaNoteZo {});
    customElements.define('x-m-ni', class extends MartyriaNoteNi {});
    customElements.define('x-m-pa', class extends MartyriaNotePa {});
    customElements.define('x-m-vou', class extends MartyriaNoteVou {});
    customElements.define('x-m-ga', class extends MartyriaNoteGa {});
    customElements.define('x-m-di', class extends MartyriaNoteDi {});
    customElements.define('x-m-ke', class extends MartyriaNoteKe {});
    customElements.define('x-m-zo-high', class extends MartyriaNoteZoHigh {});
    customElements.define('x-m-ni-high', class extends MartyriaNoteNiHigh {});
    customElements.define('x-m-pa-high', class extends MartyriaNotePaHigh {});
    customElements.define('x-m-vou-high', class extends MartyriaNoteVouHigh {});
    customElements.define('x-m-ga-high', class extends MartyriaNoteGaHigh {});
    customElements.define('x-m-di-high', class extends MartyriaNoteDiHigh {});
    customElements.define('x-m-ke-high', class extends MartyriaNoteKeHigh {});
    customElements.define('x-bar', class extends BarlineSingle {});
    customElements.define('x-bar2', class extends BarlineDouble {});
    customElements.define('x-bar-th', class extends BarlineTheseos {});
    customElements.define('x-bar-s', class extends BarlineShortSingle {});
    customElements.define('x-bar2-s', class extends BarlineShortDouble {});
    customElements.define('x-bar-th-s', class extends BarlineShortTheseos {});
    customElements.define('x-bar-a', class extends BarlineSingleAbove {});
    customElements.define('x-bar2-a', class extends BarlineDoubleAbove {});
    customElements.define('x-bar-th-a', class extends BarlineTheseosAbove {});
    customElements.define('x-bar-s-a', class extends BarlineShortSingleAbove {});
    customElements.define('x-bar2-s-a', class extends BarlineShortDoubleAbove {});
    customElements.define(
      'x-bar-th-s-a',
      class extends BarlineShortTheseosAbove {},
    );
    customElements.define('x-gor', class extends Gorthmikon {});
    customElements.define('x-pel', class extends Pelastikon {});
    // customElements.define('x-mode-first', class extends ModeFirst {});
    // customElements.define('x-mode-second', class extends ModeSecond {});
    // customElements.define('x-mode-third', class extends ModeThird {});
    // customElements.define('x-mode-third-nana', class extends ModeThirdNana {});
    // customElements.define('x-mode-fourth', class extends ModeFourth {});
    // customElements.define('x-mode-legetos', class extends ModeLegetos {});
    // customElements.define(
    //   'x-mode-plagal-first',
    //   class extends ModePlagalFirst {},
    // );
    // customElements.define(
    //   'x-mode-plagal-second',
    //   class extends ModePlagalSecond {},
    // );
    // customElements.define('x-mode-varys', class extends ModeVarys {});
    // customElements.define('x-mode-varys2', class extends ModeVarys2 {});
    // customElements.define(
    //   'x-mode-plagal-fourth',
    //   class extends ModePlagalFourth {},
    // );
    // customElements.define('x-mode-ni', class extends ModeNi {});
    // customElements.define('x-mode-pa', class extends ModePa {});
    // customElements.define('x-mode-vou', class extends ModeVou {});
    // customElements.define('x-mode-ga', class extends ModeGa {});
    // customElements.define('x-mode-di', class extends ModeDi {});
    // customElements.define('x-mode-ke', class extends ModeKe {});
    // customElements.define('x-mode-zo', class extends ModeZo {});
    // customElements.define(
    //   'x-mode-oligon-kentima-t',
    //   class extends ModeOligonKentimaAbove {},
    // );
    // customElements.define(
    //   'x-mode-oligon-ypsili',
    //   class extends ModeOligonYpsili {},
    // );
    // customElements.define('x-mode-elafron', class extends ModeElafron {});
    // customElements.define(
    //   'x-mode-running-elafron',
    //   class extends ModeRunningElafron {},
    // );
    // customElements.define('x-mode-plagal', class extends ModePlagal {});
    // customElements.define('x-mode-word-echos', class extends ModeWordEchos {});
    // customElements.define('x-mode-word-varys', class extends ModeWordVarys {});
    // customElements.define('x-mode-alpha', class extends ModeAlpha {});
    // customElements.define('x-mode-beta', class extends ModeBeta {});
    // customElements.define('x-mode-gamma', class extends ModeGamma {});
    // customElements.define('x-mode-delta', class extends ModeDelta {});
    // customElements.define(
    //   'x-mode-alpha-capital',
    //   class extends ModeAlphaCapital {},
    // );
    // customElements.define(
    //   'x-mode-beta-capital',
    //   class extends ModeBetaCapital {},
    // );
    // customElements.define(
    //   'x-mode-gamma-capital',
    //   class extends ModeGammaCapital {},
    // );
    // customElements.define(
    //   'x-mode-delta-capital',
    //   class extends ModeDeltaCapital {},
    // );
  }

  function defineCustomElementsCharactersMarkAliases() {
    customElements.define('x-psi', class extends Psifiston {});
    customElements.define('x-anti', class extends Antikenoma {});
    customElements.define('x-om', class extends Omalon {});
    customElements.define('x-om-c', class extends OmalonConnecting {});
    customElements.define('x-het', class extends Heteron {});
    customElements.define('x-et', class extends Heteron {});
    customElements.define('x-het-c', class extends HeteronConnecting {});
    customElements.define('x-et-c', class extends HeteronConnecting {});
    // customElements.define('x-endofonon', class extends Endofonon {});
    // customElements.define('x-yfen-t', class extends YfenAbove {});
    // customElements.define('x-yfen-b', class extends YfenBelow {});
    customElements.define('x-kl', class extends KlasmaAbove {});
    customElements.define('x-kl-b', class extends KlasmaBelow {});
    // customElements.define('x-apli', class extends Apli {});
    // customElements.define('x-dipli', class extends Dipli {});
    // customElements.define('x-tripli', class extends Tripli {});
    // customElements.define('x-tetrapli', class extends Tetrapli {});
    // customElements.define('x-koronis', class extends Koronis {});
    // customElements.define('x-leimma-dot', class extends LeimmaDot {});

    customElements.define('x-g', class extends GorgonAbove {});
    customElements.define('x-g-b', class extends GorgonBelow {});
    customElements.define('x-dg', class extends GorgonDottedLeft {});
    customElements.define('x-gd', class extends GorgonDottedRight {});
    customElements.define('x-gg', class extends Digorgon {});
    customElements.define('x-dgg', class extends DigorgonDottedLeftBelow {});
    customElements.define('x-gdg', class extends DigorgonDottedLeftAbove {});
    customElements.define('x-ggd', class extends DigorgonDottedRight {});
    customElements.define('x-ggg', class extends Trigorgon {});
    customElements.define('x-dggg', class extends TrigorgonDottedLeftBelow {});
    customElements.define('x-ggdg', class extends TrigorgonDottedLeftAbove {});
    customElements.define('x-gggd', class extends TrigorgonDottedRight {});
    // customElements.define('x-argon', class extends Argon {});
    // customElements.define('x-diargon', class extends Diargon {});
    // customElements.define('x-triargon', class extends Triargon {});
    customElements.define('x-g-2', class extends GorgonSecondary {});
    customElements.define('x-dg-2', class extends GorgonDottedLeftSecondary {});
    customElements.define('x-gd-2', class extends GorgonDottedRightSecondary {});
    customElements.define('x-gg-2', class extends DigorgonSecondary {});
    customElements.define(
      'x-dgg-2',
      class extends DigorgonDottedLeftBelowSecondary {},
    );
    customElements.define(
      'x-ggd-2',
      class extends DigorgonDottedRightSecondary {},
    );
    customElements.define(
      'x-gdg-2',
      class extends DigorgonDottedLeftSecondary {},
    );
    customElements.define('x-ggg-2', class extends TrigorgonSecondary {});
    customElements.define(
      'x-dggg-2',
      class extends TrigorgonDottedLeftBelowSecondary {},
    );
    customElements.define(
      'x-gggd-2',
      class extends TrigorgonDottedRightSecondary {},
    );
    customElements.define(
      'x-ggdg-2',
      class extends TrigorgonDottedLeftSecondary {},
    );

    customElements.define('x-t1-m', class extends AgogiPoliArgiAbove {});
    customElements.define('x-t2-m', class extends AgogiArgoteriAbove {});
    customElements.define('x-t3-m', class extends AgogiArgiAbove {});
    customElements.define('x-t4-m', class extends AgogiMetriaAbove {});
    customElements.define('x-t5-m', class extends AgogiMesiAbove {});
    customElements.define('x-t6-m', class extends AgogiGorgiAbove {});
    customElements.define('x-t7-m', class extends AgogiGorgoteriAbove {});
    customElements.define('x-t8-m', class extends AgogiPoliGorgiAbove {});
    customElements.define('x-m-tick', class extends MartyriaTick {});
    customElements.define('x-m-varys', class extends MartyriaZoBelow {});
    customElements.define('x-m-delta', class extends MartyriaDeltaBelow {});
    customElements.define('x-m-alpha', class extends MartyriaAlphaBelow {});
    customElements.define('x-m-legetos', class extends MartyriaLegetosBelow {});
    customElements.define('x-m-nana', class extends MartyriaNanaBelow {});
    customElements.define(
      'x-m-delta-aa',
      class extends MartyriaDeltaDottedBelow {},
    );
    customElements.define(
      'x-m-alpha-aa',
      class extends MartyriaAlphaDottedBelow {},
    );
    customElements.define(
      'x-m-hc-pa',
      class extends MartyriaHardChromaticPaBelow {},
    );
    customElements.define(
      'x-m-hc-di',
      class extends MartyriaHardChromaticDiBelow {},
    );
    customElements.define(
      'x-m-sc-di',
      class extends MartyriaSoftChromaticDiBelow {},
    );
    customElements.define(
      'x-m-sc-ke',
      class extends MartyriaSoftChromaticKeBelow {},
    );
    customElements.define('x-m-zygos', class extends MartyriaZygosBelow {});
    customElements.define('x-m-varys-a', class extends MartyriaZoAbove {});
    customElements.define('x-m-delta-a', class extends MartyriaDeltaAbove {});
    customElements.define('x-m-alpha-a', class extends MartyriaAlphaAbove {});
    customElements.define('x-m-legetos-a', class extends MartyriaLegetosAbove {});
    customElements.define('x-m-nana-a', class extends MartyriaNanaAbove {});
    customElements.define(
      'x-m-delta-aa-a',
      class extends MartyriaDeltaDottedAbove {},
    );
    customElements.define(
      'x-m-alpha-aa-a',
      class extends MartyriaAlphaDottedAbove {},
    );
    customElements.define(
      'x-m-hc-pa-a',
      class extends MartyriaHardChromaticPaAbove {},
    );
    customElements.define(
      'x-m-hc-di-a',
      class extends MartyriaHardChromaticDiAbove {},
    );
    customElements.define(
      'x-m-sc-di-a',
      class extends MartyriaSoftChromaticDiAbove {},
    );
    customElements.define(
      'x-m-sc-ke-a',
      class extends MartyriaSoftChromaticKeAbove {},
    );
    customElements.define('x-m-zygos-a', class extends MartyriaZygosAbove {});
    customElements.define(
      'x-f-d-ni-low',
      class extends FthoraDiatonicNiLowAbove {},
    );
    customElements.define('x-f-d-pa', class extends FthoraDiatonicPaAbove {});
    customElements.define('x-f-d-vou', class extends FthoraDiatonicVouAbove {});
    customElements.define('x-f-d-ga', class extends FthoraDiatonicGaAbove {});
    customElements.define('x-f-d-di', class extends FthoraDiatonicDiAbove {});
    customElements.define('x-f-d-ke', class extends FthoraDiatonicKeAbove {});
    customElements.define('x-f-d-zo', class extends FthoraDiatonicZoAbove {});
    customElements.define(
      'x-f-d-ni-high',
      class extends FthoraDiatonicNiHighAbove {},
    );
    customElements.define(
      'x-f-hc-pa',
      class extends FthoraHardChromaticPaAbove {},
    );
    customElements.define(
      'x-f-hc-di',
      class extends FthoraHardChromaticDiAbove {},
    );
    customElements.define(
      'x-f-sc-di',
      class extends FthoraSoftChromaticDiAbove {},
    );
    customElements.define(
      'x-f-sc-ke',
      class extends FthoraSoftChromaticKeAbove {},
    );
    customElements.define('x-f-agem', class extends FthoraEnharmonicAbove {});
    customElements.define('x-f-en', class extends FthoraEnharmonicAbove {});
    customElements.define('x-f-zygos', class extends ChroaZygosAbove {});
    customElements.define('x-f-kliton', class extends ChroaKlitonAbove {});
    customElements.define('x-f-spathi', class extends ChroaSpathiAbove {});
    customElements.define(
      'x-f-d-ni-low-2',
      class extends FthoraDiatonicNiLowSecondary {},
    );
    customElements.define(
      'x-f-d-pa-2',
      class extends FthoraDiatonicPaSecondary {},
    );
    customElements.define(
      'x-f-d-vou-2',
      class extends FthoraDiatonicVouSecondary {},
    );
    customElements.define(
      'x-f-d-ga-2',
      class extends FthoraDiatonicGaSecondary {},
    );
    customElements.define(
      'x-f-d-di-2',
      class extends FthoraDiatonicDiSecondary {},
    );
    customElements.define(
      'x-f-d-ke-2',
      class extends FthoraDiatonicKeSecondary {},
    );
    customElements.define(
      'x-f-d-zo-2',
      class extends FthoraDiatonicZoSecondary {},
    );
    customElements.define(
      'x-f-d-ni-high-2',
      class extends FthoraDiatonicNiHighSecondary {},
    );
    customElements.define(
      'x-f-hc-pa-2',
      class extends FthoraHardChromaticPaSecondary {},
    );
    customElements.define(
      'x-f-hc-di-2',
      class extends FthoraHardChromaticDiSecondary {},
    );
    customElements.define(
      'x-f-sc-di-2',
      class extends FthoraSoftChromaticDiSecondary {},
    );
    customElements.define(
      'x-f-sc-ke-2',
      class extends FthoraSoftChromaticKeSecondary {},
    );
    customElements.define(
      'x-f-agem-2',
      class extends FthoraEnharmonicSecondary {},
    );
    customElements.define('x-f-en-2', class extends FthoraEnharmonicSecondary {});
    customElements.define('x-f-zygos-2', class extends ChroaZygosSecondary {});
    customElements.define('x-f-kliton-2', class extends ChroaKlitonSecondary {});
    customElements.define('x-f-spathi-2', class extends ChroaSpathiSecondary {});

    customElements.define(
      'x-f-d-ni-low-3',
      class extends FthoraDiatonicNiLowTertiary {},
    );
    customElements.define(
      'x-f-d-pa-3',
      class extends FthoraDiatonicPaTertiary {},
    );
    customElements.define(
      'x-f-d-vou-3',
      class extends FthoraDiatonicVouTertiary {},
    );
    customElements.define(
      'x-f-d-ga-3',
      class extends FthoraDiatonicGaTertiary {},
    );
    customElements.define(
      'x-f-d-di-3',
      class extends FthoraDiatonicDiTertiary {},
    );
    customElements.define(
      'x-f-d-ke-3',
      class extends FthoraDiatonicKeTertiary {},
    );
    customElements.define(
      'x-f-d-zo-3',
      class extends FthoraDiatonicZoTertiary {},
    );
    customElements.define(
      'x-f-d-ni-high-3',
      class extends FthoraDiatonicNiHighTertiary {},
    );
    customElements.define(
      'x-f-hc-pa-3',
      class extends FthoraHardChromaticPaTertiary {},
    );
    customElements.define(
      'x-f-hc-di-3',
      class extends FthoraHardChromaticDiTertiary {},
    );
    customElements.define(
      'x-f-sc-di-3',
      class extends FthoraSoftChromaticDiTertiary {},
    );
    customElements.define(
      'x-f-sc-ke-3',
      class extends FthoraSoftChromaticKeTertiary {},
    );
    customElements.define(
      'x-f-agem-3',
      class extends FthoraEnharmonicTertiary {},
    );
    customElements.define('x-f-en-3', class extends FthoraEnharmonicTertiary {});
    customElements.define('x-f-zygos-3', class extends ChroaZygosTertiary {});
    customElements.define('x-f-kliton-3', class extends ChroaKlitonTertiary {});
    customElements.define('x-f-spathi-3', class extends ChroaSpathiTertiary {});

    customElements.define(
      'x-f-d-ni-low-b',
      class extends FthoraDiatonicNiLowBelow {},
    );
    customElements.define('x-f-d-pa-b', class extends FthoraDiatonicPaBelow {});
    customElements.define('x-f-d-vou-b', class extends FthoraDiatonicVouBelow {});
    customElements.define('x-f-d-ga-b', class extends FthoraDiatonicGaBelow {});
    customElements.define('x-f-d-di-b', class extends FthoraDiatonicDiBelow {});
    customElements.define('x-f-d-ke-b', class extends FthoraDiatonicKeBelow {});
    customElements.define('x-f-d-zo-b', class extends FthoraDiatonicZoBelow {});
    customElements.define(
      'x-f-d-ni-high-b',
      class extends FthoraDiatonicNiHighBelow {},
    );
    customElements.define(
      'x-f-hc-pa-b',
      class extends FthoraHardChromaticPaBelow {},
    );
    customElements.define(
      'x-f-hc-di-b',
      class extends FthoraHardChromaticDiBelow {},
    );
    customElements.define(
      'x-f-sc-di-b',
      class extends FthoraSoftChromaticDiBelow {},
    );
    customElements.define(
      'x-f-sc-ke-b',
      class extends FthoraSoftChromaticKeBelow {},
    );
    customElements.define('x-f-en-b', class extends FthoraEnharmonicBelow {});
    customElements.define('x-f-agem-b', class extends FthoraEnharmonicBelow {});
    customElements.define('x-f-zygos-b', class extends ChroaZygosBelow {});
    customElements.define('x-f-kliton-b', class extends ChroaKlitonBelow {});
    customElements.define('x-f-spathi-b', class extends ChroaSpathiBelow {});
    customElements.define('x-di2', class extends Diesis2 {});
    customElements.define('x-di4', class extends Diesis4 {});
    customElements.define('x-di6', class extends Diesis6 {});
    customElements.define('x-di8', class extends Diesis8 {});
    customElements.define('x-di-g', class extends DiesisGenikiAbove {});
    customElements.define('x-di-g-2', class extends DiesisGenikiSecondary {});
    customElements.define('x-di-g-3', class extends DiesisGenikiTertiary {});
    customElements.define('x-di-g-b', class extends DiesisGenikiBelow {});
    customElements.define('x-yf2', class extends Yfesis2 {});
    customElements.define('x-yf4', class extends Yfesis4 {});
    customElements.define('x-yf6', class extends Yfesis6 {});
    customElements.define('x-yf8', class extends Yfesis8 {});
    customElements.define('x-yf-g', class extends YfesisGenikiAbove {});
    customElements.define('x-yf-g-b', class extends YfesisGenikiBelow {});
    customElements.define('x-yf2-2', class extends Yfesis2Secondary {});
    customElements.define('x-yf4-2', class extends Yfesis4Secondary {});
    customElements.define('x-yf6-2', class extends Yfesis6Secondary {});
    customElements.define('x-yf8-2', class extends Yfesis8Secondary {});
    customElements.define('x-yf-g-2', class extends YfesisGenikiSecondary {});
    customElements.define('x-yf2-3', class extends Yfesis2Tertiary {});
    customElements.define('x-yf4-3', class extends Yfesis4Tertiary {});
    customElements.define('x-yf6-3', class extends Yfesis6Tertiary {});
    customElements.define('x-yf8-3', class extends Yfesis8Tertiary {});
    customElements.define('x-yf-g-3', class extends YfesisGenikiTertiary {});
    customElements.define('x-sharp-2', class extends Diesis2 {});
    customElements.define('x-sharp-4', class extends Diesis4 {});
    customElements.define('x-sharp-6', class extends Diesis6 {});
    customElements.define('x-sharp-8', class extends Diesis8 {});
    customElements.define('x-sharp-g', class extends DiesisGenikiAbove {});
    customElements.define('x-sharp-g-2', class extends DiesisGenikiSecondary {});
    customElements.define('x-sharp-g-3', class extends DiesisGenikiTertiary {});
    customElements.define('x-sharp-g-b', class extends DiesisGenikiBelow {});
    customElements.define('x-di2-2', class extends Diesis2Secondary {});
    customElements.define('x-di4-2', class extends Diesis4Secondary {});
    customElements.define('x-di6-2', class extends Diesis6Secondary {});
    customElements.define('x-di8-2', class extends Diesis8Secondary {});
    customElements.define('x-di2-3', class extends Diesis2Tertiary {});
    customElements.define('x-di4-3', class extends Diesis4Tertiary {});
    customElements.define('x-di6-3', class extends Diesis6Tertiary {});
    customElements.define('x-di8-3', class extends Diesis8Tertiary {});
    customElements.define('x-sharp-2-2', class extends Diesis2Secondary {});
    customElements.define('x-sharp-4-2', class extends Diesis4Secondary {});
    customElements.define('x-sharp-6-2', class extends Diesis6Secondary {});
    customElements.define('x-sharp-8-2', class extends Diesis8Secondary {});
    customElements.define('x-sharp-2-3', class extends Diesis2Tertiary {});
    customElements.define('x-sharp-4-3', class extends Diesis4Tertiary {});
    customElements.define('x-sharp-6-3', class extends Diesis6Tertiary {});
    customElements.define('x-sharp-8-3', class extends Diesis8Tertiary {});
    customElements.define('x-flat-2', class extends Yfesis2 {});
    customElements.define('x-flat-4', class extends Yfesis4 {});
    customElements.define('x-flat-6', class extends Yfesis6 {});
    customElements.define('x-flat-8', class extends Yfesis8 {});
    customElements.define('x-flat-2-2', class extends Yfesis2Secondary {});
    customElements.define('x-flat-4-2', class extends Yfesis4Secondary {});
    customElements.define('x-flat-6-2', class extends Yfesis6Secondary {});
    customElements.define('x-flat-8-2', class extends Yfesis8Secondary {});
    customElements.define('x-flat-2-3', class extends Yfesis2Tertiary {});
    customElements.define('x-flat-4-3', class extends Yfesis4Tertiary {});
    customElements.define('x-flat-6-3', class extends Yfesis6Tertiary {});
    customElements.define('x-flat-8-3', class extends Yfesis8Tertiary {});
    customElements.define('x-flat-g', class extends YfesisGenikiAbove {});
    customElements.define('x-flat-g-2', class extends YfesisGenikiSecondary {});
    customElements.define('x-flat-g-3', class extends YfesisGenikiTertiary {});
    customElements.define('x-flat-g-b', class extends YfesisGenikiBelow {});
    customElements.define('x-mn2', class extends MeasureNumber2 {});
    customElements.define('x-mn3', class extends MeasureNumber3 {});
    customElements.define('x-mn4', class extends MeasureNumber4 {});
    customElements.define('x-mn5', class extends MeasureNumber5 {});
    customElements.define('x-mn6', class extends MeasureNumber6 {});
    customElements.define('x-mn7', class extends MeasureNumber7 {});
    customElements.define('x-mn8', class extends MeasureNumber8 {});
    customElements.define('x-ni-ni', class extends NoteIndicatorNi {});
    customElements.define('x-ni-pa', class extends NoteIndicatorPa {});
    customElements.define('x-ni-vou', class extends NoteIndicatorVou {});
    customElements.define('x-ni-ga', class extends NoteIndicatorGa {});
    customElements.define('x-ni-di', class extends NoteIndicatorDi {});
    customElements.define('x-ni-ke', class extends NoteIndicatorKe {});
    customElements.define('x-ni-zo', class extends NoteIndicatorZo {});
    customElements.define('x-ii-uni', class extends IsonIndicatorUnison {});
    customElements.define('x-ii-di-low', class extends IsonIndicatorDiLow {});
    customElements.define('x-ii-ke-low', class extends IsonIndicatorKeLow {});
    customElements.define('x-ii-zo', class extends IsonIndicatorZo {});
    customElements.define('x-ii-ni', class extends IsonIndicatorNi {});
    customElements.define('x-ii-pa', class extends IsonIndicatorPa {});
    customElements.define('x-ii-vou', class extends IsonIndicatorVou {});
    customElements.define('x-ii-ga', class extends IsonIndicatorGa {});
    customElements.define('x-ii-di', class extends IsonIndicatorDi {});
    customElements.define('x-ii-ke', class extends IsonIndicatorKe {});
    customElements.define('x-ii-zo-high', class extends IsonIndicatorZoHigh {});
  }

  function defineCustomElements() {
    customElements.define('x-drop-cap', DropCap);
    customElements.define('x-dc', class extends DropCap {});
    customElements.define('x-lyric', Lyric);
    customElements.define('x-ly', class extends Lyric {});
    customElements.define('x-martyria', Martyria);
    customElements.define('x-m', class extends Martyria {});
    customElements.define('x-melisma', Melisma);
    customElements.define('x-mel', class extends Melisma {});
    customElements.define('x-neume', Neume);
    customElements.define('x-note', Note);
    customElements.define('x-n', class extends Note {});
    customElements.define('x-spacer', Spacer);
    customElements.define('x-sp', class extends Spacer {});
    customElements.define('x-spacer-apostrofos', SpacerApostrofos);
    customElements.define('x-spacer-vareia', SpacerVareia);

    // IMPORTANT: MUST DEFINE BODY NEUMES FIRST
    defineCustomElementsCharactersBodyCodegen();
    defineCustomElementsCharactersBodyAliases();

    defineCustomElementsCharactersMarkCodegen();
    defineCustomElementsCharactersMarkAliases();
  }

  function isWebkit() {
    const userAgent = navigator.userAgent.toLowerCase();

    // This should detect whether the user is using the Safari desktop browser
    if (
      userAgent.indexOf('safari') !== -1 &&
      userAgent.indexOf('chrome') === -1 &&
      userAgent.indexOf('chromium') === -1 &&
      userAgent.indexOf('android') === -1
    ) {
      return true;
    }

    // This should detect whether the user is using the Safari iOS browser
    if (
      userAgent.indexOf('ipad') !== -1 ||
      userAgent.indexOf('iphone') !== -1 ||
      userAgent.indexOf('ipod') !== -1
    ) {
      return true;
    }

    return false;
  }

  /* eslint-disable no-undefined,no-param-reassign,no-shadow */

  /**
   * Throttle execution of a function. Especially useful for rate limiting
   * execution of handlers on events like resize and scroll.
   *
   * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
   *                                            are most useful.
   * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
   *                                            as-is, to `callback` when the throttled-function is executed.
   * @param {object} [options] -              An object to configure options.
   * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
   *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
   *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
   *                                            `delay` milliseconds, the internal counter is reset).
   * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
   *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
   *                                            callback will never executed if both noLeading = true and noTrailing = true.
   * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
   *                                            false (at end), schedule `callback` to execute after `delay` ms.
   *
   * @returns {Function} A new, throttled, function.
   */
  function throttle (delay, callback, options) {
    var _ref = {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
    /*
     * After wrapper has stopped being called, this timeout ensures that
     * `callback` is executed at the proper times in `throttle` and `end`
     * debounce modes.
     */
    var timeoutID;
    var cancelled = false;

    // Keep track of the last time `callback` was executed.
    var lastExec = 0;

    // Function to clear existing timeout
    function clearExistingTimeout() {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    }

    // Function to cancel next exec
    function cancel(options) {
      var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
      clearExistingTimeout();
      cancelled = !upcomingOnly;
    }

    /*
     * The `wrapper` function encapsulates all of the throttling / debouncing
     * functionality and when executed will limit the rate at which `callback`
     * is executed.
     */
    function wrapper() {
      for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
        arguments_[_key] = arguments[_key];
      }
      var self = this;
      var elapsed = Date.now() - lastExec;
      if (cancelled) {
        return;
      }

      // Execute `callback` and update the `lastExec` timestamp.
      function exec() {
        lastExec = Date.now();
        callback.apply(self, arguments_);
      }

      /*
       * If `debounceMode` is true (at begin) this is used to clear the flag
       * to allow future `callback` executions.
       */
      function clear() {
        timeoutID = undefined;
      }
      if (!noLeading && debounceMode && !timeoutID) {
        /*
         * Since `wrapper` is being called for the first time and
         * `debounceMode` is true (at begin), execute `callback`
         * and noLeading != true.
         */
        exec();
      }
      clearExistingTimeout();
      if (debounceMode === undefined && elapsed > delay) {
        if (noLeading) {
          /*
           * In throttle mode with noLeading, if `delay` time has
           * been exceeded, update `lastExec` and schedule `callback`
           * to execute after `delay` ms.
           */
          lastExec = Date.now();
          if (!noTrailing) {
            timeoutID = setTimeout(debounceMode ? clear : exec, delay);
          }
        } else {
          /*
           * In throttle mode without noLeading, if `delay` time has been exceeded, execute
           * `callback`.
           */
          exec();
        }
      } else if (noTrailing !== true) {
        /*
         * In trailing throttle mode, since `delay` time has not been
         * exceeded, schedule `callback` to execute `delay` ms after most
         * recent execution.
         *
         * If `debounceMode` is true (at begin), schedule `clear` to execute
         * after `delay` ms.
         *
         * If `debounceMode` is false (at end), schedule `callback` to
         * execute after `delay` ms.
         */
        timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
      }
    }
    wrapper.cancel = cancel;

    // Return the wrapper function.
    return wrapper;
  }

  if (isWebkit()) {
    console.log('byzhtml: webkit browser detected. Using webkit positioning.');

    const fontFamilies = ['Neanes', 'NeanesRTL', 'NeanesStathisSeries'];

    (async () => {
      for (const fontFamily of fontFamilies) {
        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/gh/neanes/byzhtml@1.0.25/dist/${fontFamily.toLowerCase()}.metadata.json`,
          );

          const data = await response.json();
          byzhtml.fontService.loadMap(fontFamily, data);
        } catch (err) {
          console.error(`could not load font metadata for ${fontFamily}: ${err}`);
        }
      }
    })().then(() => {
      byzhtml.neumeMappingService.glyphNameToCodepointMap.set(
        'oligonKentimataBelow.alt01',
        '\uF000',
      );

      byzhtml.neumeMappingService.glyphNameToCodepointMap.set(
        'antikenoma.alt01',
        '\uF002',
      );

      byzhtml.options.useWebkitPositioning = true;

      defineCustomElements();
    });
  } else {
    defineCustomElements();
  }

  window.addEventListener('load', (event) => {
    setTimeout(processAutoMelismas, 0);

    // TODO figure out how to determine whether custom elements
    // have loaded
    setTimeout(processAutoMelismas, 100);
    setTimeout(processAutoMelismas, 1000);

    window.addEventListener('resize', throttle(100, processAutoMelismas));

    window.addEventListener('scroll', throttle(100, processAutoMelismas));
  });

  return byzhtml;

})();
//# sourceMappingURL=byzhtml.js.map
