import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';

function App() {

  const dispatch = useDispatch();
  const [walletName, setWalletName] = useState("");
  const [walletObj, setWalletObj] = useState({});
  const [click, setClick] = useState(false);
  const walletsObj = useSelector((state) => state.wallets);
  if (JSON.parse(localStorage.getItem('wallets')) === null) {
    localStorage.setItem('wallets', JSON.stringify(walletsObj));
  }
  const walletLocalSorage = localStorage.getItem('wallets');
  const walletParse = JSON.parse(walletLocalSorage).wallets

  useEffect(() => {
    if (click) {
      setWalletName("");
      dispatch({ type: 'ADD_WALLET', payload: walletObj });
      setClick(false);
    }
  });



  const generateWallet = async (walletName) => {
    const responseNFT = await fetch(`https://wax.api.atomicassets.io/atomicassets/v1/assets?page=1&limit=1000&owner=${walletName}&match=&collection_name=&schema_name=&template_id=&collection_whitelist=1adoralphas1%2C1amazingbook%2C1bodyinmove1%2C1coolartnft1%2C1cryptobeard%2C1neuroworlds%2C1rabbithole1%2C1spacecorgis%2C2cryptokingg%2C3dnanoocards%2C3doddities33%2C515toysinthe%2Cabstractmode%2Cabstractprnt%2Cabstracts1sm%2Cafricanartza%2Caigeometrics%2Cakubananolab%2Calexartworks%2Calien.worlds%2Calienanomaly%2Calienfansart%2Calienftshelk%2Calpacaworlds%2Camamainart15%2Cambidextrous%2Cangryflygame%2Canimalbreeds%2Canimalworld1%2Cannafinearts%2Canonvdigital%2Canyo.b1%2Canytasknifty%2Caprenticeart%2Carchitectart%2Carmy%2Cart.worlds%2Cartburnstash%2Cartbyhuddo21%2Cartbykstuart%2Carthistory21%2Cartofacidsun%2Cartworldnfts%2Casloanartist%2Caspirantarts%2Castrolabebrz%2Catari%2Cathalloffame%2Catomic%2Catomiccomics%2Cautowildnfts%2Cawakenedkeys%2Cbadcryptonft%2Cbaddaysznfts%2Cbaddingtons1%2Cbadges.b1%2Cbananodesign%2Cbananotimea1%2Cbarghout.r2%2Cbaselfasnach%2Cbattlegames1%2Cbbbbbbbblobs%2Cbccaldwell13%2Cbihutnetwork%2Cbishopsworks%2Cbitcoinbabes%2Cbitcoinelite%2Cbitcoinorign%2Cbitdragons11%2Cbitkenstanxx%2Cbitspacecryp%2Cbitverse%2Cbkxcnftdrops%2Cblackdemon33%2Cblanesstudio%2Cblkchancards%2Cblockblumpas%2Cblockmonkies%2Cblockstarrzz%2Cblueprints11%2Cbmuqachphoto%2Cbobopixeloxo%2Cboid4science%2Cboneheads444%2Cborlandworld%2Cbosqueclanv1%2Cboxmazeonwax%2Cbrandonwolf4%2Cbratz%2Cbrucewaxnftz%2Cbtcorigins21%2Cbuildingsarc%2Cburgerstyles%2Cbwboobsart21%2Cbyjohnhunter%2Cbyronartset1%2Cbyronszbcats%2Ccabal%2Ccanadasocomp%2Ccanaryisland%2Ccaprices1111%2Ccardbardgame%2Ccartombs.r2%2Ccatartnfts21%2Ccatfresharts%2Ccatheadpunks%2Ccbanotshotsx%2Ccc32dninenft%2Cccdmacrolife%2Cccdphotolife%2Ccedauri54321%2Cchaincreatrs%2Ccheckmatenft%2Ccheesmansart%2Cchesspuzzles%2Cchibiproject%2Cchipandbrock%2Cchristahuntx%2Cchronaverse1%2Cclashdomenft%2Cclasseartacr%2Cclassicaltat%2Cclaypetfox12%2Ccloudchasers%2Ccodamecrypto%2Ccodingisland%2Ccoinbots1111%2Ccoindodocard%2Ccoitalgroups%2Ccollectemall%2Ccollectwhale%2Ccolonizemars%2Cconceptboxxx%2Cconceptvideo%2Ccooolaidtest%2Ccptnpwnznftz%2Ccreatedbyaet%2Ccreationblok%2Ccreekdrops21%2Ccric.owens%2Ccrpcreatures%2Ccrptomonkeys%2Ccrptoskillrs%2Ccrroriginals%2Ccrypsychosis%2Ccryptenthuss%2Ccrypticdzign%2Ccryptmonster%2Ccrypto5tache%2Ccryptoatacks%2Ccryptobabes1%2Ccryptobeings%2Ccryptoblood1%2Ccryptobugs21%2Ccryptocandys%2Ccryptocross1%2Ccryptocrypt2%2Ccryptoeuclid%2Ccryptoflash1%2Ccryptohounds%2Ccryptojitsu1%2Ccryptomarks1%2Ccryptomedals%2Ccryptomoonie%2Ccryptoninjaa%2Ccryptonormyz%2Ccryptooil111%2Ccryptopixe1s%2Ccryptopuppie%2Ccryptopuppyz%2Ccryptopuzzle%2Ccryptosanta1%2Ccryptosharks%2Ccryptoswatch%2Ccryptotwerpz%2Ccryptouno1st%2Ccryptozootop%2Ccryptpwrcube%2Ccthulhucards%2Ccursescurses%2Ccuteboxonwax%2Ccutecrushies%2Ccutedoodless%2Ccutiepiesnft%2Ccutiewaifu4u%2Ccyberpornwax%2Ccyberpuppies%2Cd1rtyflapjak%2Cdacathonnfts%2Cdanishcrypto%2Cdanmayphotos%2Cdarkcountryh%2Cdarkpinup%2Cdarksiderprz%2Cdayakorigins%2Cdazstudionft%2Cdeadbabiesbg%2Cdeadmau5%2Cdedhedartist%2Cdeepdivetrip%2Cdemiashbrand%2Cdesertseries%2Cdevtest12345%2Cdgevangelist%2Cdigitalbase3%2Cdigitaldonut%2Cdigitalducks%2Cdigitalpetzz%2Cdingleberrie%2Cdkcryptogods%2Cdnabloodwrld%2Cdogpatchbrew%2Cdokidokipnks%2Cdolpchainwax%2Cdontpanicone%2Cdoodleartoon%2Cdoodledragon%2Cdopestickers%2Cdoublevision%2Cdreampalette%2Cdripnwithwax%2Cdrzammsydolo%2Cdualityxxvi1%2Cduckiegoes4u%2Cdust%2Cdygyconstuff%2Ce2tradecards%2Ceacollection%2Ceasterbunny1%2Cecollection1%2Celementalpix%2Celementblobs%2Cempiregrower%2Cemporiumnfts%2Cendlessloots%2Centerseries1%2Ceosdetcomics%2Ceosdetfanart%2Ceosgocards11%2Ceosnationama%2Ceosnhotsauce%2Cepicdylan411%2Cerisinthesea%2Cethermineeee%2Cexitlimbowax%2Cfantasypsnts%2Cfatjimmyamps%2Cfigurinhanft%2Cfilmsforever%2Cfinallyalign%2Cflegendsnfts%2Cfluidartlove%2Cfmoosephotos%2Cfoodmonsters%2Cfoodwarspctx%2Cfourtwentycb%2Cfractalhouse%2Cfractallover%2Cfractaplanet%2Cfreehongkong%2Cfreshydroppy%2Cfundadoresoo%2Cfundotxcutie%2Cfutureyesnft%2Cfwdcollction%2Cgalametryxxx%2Cgallery.r2%2Cgamerquesttv%2Cgbartgallery%2Cgdz.topps%2Cgempathcards%2Cgeometryguru%2Cgerrisonnum2%2Cgiftsforladz%2Cgiftuniverse%2Cgir1slovenft%2Cgirlpinupart%2Cgiselxtotems%2Cglummybears1%2Cgnomeseries1%2Cgoblinsonwax%2Cgocryptobrew%2Cgoldmannstax%2Cgoodnewscoin%2Cgoodvibesart%2Cgpk.topps%2Cgraffcologne%2Cgraffitinfts%2Cgraffk1ngsuk%2Cgrimfolkscol%2Cgvmadetokens%2Cgybniftyclub%2Cgyratinghips%2Challowscards%2Chappytokillu%2Charrisonfst1%2Chashcardsio1%2Chashkingsmuv%2Cheartseed111%2Cherbthechamp%2Chetlnpseries%2Chodlgod%2Chollypaints5%2Chotcakesdrop%2Chubbersnakss%2Chumbledrawin%2Churtinniftys%2Cikimonoworld%2Ciminedphuktu%2Cimtwerkypepe%2Cinkingcintam%2Cinsilentagny%2Cinspectorgen%2Cinvokespirit%2Citsthegoiter%2Cjamtinwaxart%2Cjapanstamp22%2Cjimjuice4sqd%2Cjoecsketches%2Ckacreations1%2Ckaleidabang3%2Ckaleidoscope%2Ckaosmoonibc1%2Ckennbosakgif%2Ckenriotsarts%2Ckernelillokp%2Ckevdamguer55%2Ckinderminers%2Ckogsofficial%2Ckonceptonwax%2Ckoq%2Ckoralovelace%2Ckrstarcharts%2Ckrwingerarts%2Ckucoinftreal%2Ckurrjursarts%2Ckylverprogzz%2Clandelephant%2Clastdaysfiat%2Clbarintexasl%2Cldesignstore%2Cleftarmover1%2Clegendscoins%2Clegendsofnft%2Clifestyleart%2Clightswonder%2Clkasitodrop1%2Clocationcard%2Clollitedoge1%2Cloweffwaifu1%2Clucakartwork%2Cluciartlucia%2Cluckycharm21%2Cluketonftart%2Cluminacrypto%2Clurk24dotcom%2Clysergicmind%2Cmadmarcusmad%2Cmadshadowart%2Cmadtowerarts%2Cmafiacardwax%2Cmagnta555art%2Cmagnta555ocs%2Cmaikis1anfts%2Cmajesticsea1%2Cmandalamesss%2Cmanderpsyche%2Cmanolinhonft%2Cmarbledcrypt%2Cmarcosdkarte%2Cmariartedrop%2Cmarisolvenga%2Cmattaoinesia%2Cmattborchert%2Cmatthewsmaze%2Cmddeesignerr%2Cmeanderdot11%2Cmedievalcole%2Cmedievlmemes%2Cmediumformat%2Cmeisanmuiart%2Cmeltingsnoww%2Cmeninainabox%2Cmermaidfire1%2Cmetaforce%2Cmetalwargame%2Cmexonefoodie%2Cmfjglassssss%2Cmicroworlds1%2Cmilitaryunit%2Cminicryptoar%2Cmisfitspland%2Cmissteennfts%2Cmixandmaxwoo%2Cmjartworknft%2Cmomentintime%2Cmonkeysworld%2Cmonsterattac%2Cmonsters.r2%2Cmonsterworld%2Cmonstrfanart%2Cmosaicartcrd%2Cmosaicstamps%2Cmotoartworks%2Cmrcryptonfts%2Cmrriro3darts%2Cmtblkcryp2ns%2Cmtpgothicart%2Cmugzbyjwdnft%2Cmundobitcoin%2Cmurderclowns%2Cmushroomhunt%2Cmutants.r2%2Cmycryptocaps%2Cmycuteness55%2Cmyfathersart%2Cmyfirstcards%2Cmykidcandraw%2Cnastyhooks4u%2Cnathan4naron%2Cneon3oooarts%2Cnewageartnow%2Cnexusdigital%2Cnftartduarah%2Cnftartmuseum%2Cnftboxing123%2Cnftbulls4141%2Cnftdropkings%2Cnftdropshots%2Cnfteasegirls%2Cnfthypealbum%2Cnftkitchentc%2Cnftmyjourney%2Cnftntgallery%2Cnftplushhhhh%2Cnftsgeniusxv%2Cnftstickerco%2Cnftstorycard%2Cnfttraveling%2Cniftycards11%2Cniftycloud33%2Cniftydrops%2Cniftysticker%2Cniftywizards%2Cnimoy%2Cninetartnfts%2Cnoacollector%2Cnomadbradnft%2Cnomgyvintage%2Cnonfngbgirls%2Cnonsequiturs%2Cnorthenlight%2Cnxart3dpaint%2Cnytcreatures%2Coceanplanet1%2Cofficial.wax%2Cofficialcozy%2Cofficialhero%2Coilsofhavana%2Colondonsketc%2Cootygerartoo%2Copticaldelus%2Corganicpics1%2Cpantherchams%2Cparisartwork%2Cparodykidss2%2Cpeacebondnft%2Cpeacefulspce%2Cpepe%2Cpepe.hero%2Cperiodicelem%2Cphonepaintss%2Cphotochamber%2Cphotojolene1%2Cphotosofcatz%2Cpictorializm%2Cpictureofart%2Cpilsinupland%2Cpiratesonsea%2Cpixeledfaces%2Cpixelheads21%2Cpixelhistory%2Cpixellabs123%2Cpixelsdotart%2Cpixelwooorms%2Cpixiimonstaa%2Cplartcollect%2Cpngdivingwld%2Cpoeminshards%2Cpokeyforever%2Cporkbuscards%2Cposeidonasma%2Cpotomacskyrb%2Cprintergobrr%2Cproantarktis%2Cprojectnifty%2Cprospectorsa%2Cpuftcreative%2Cpuzzlecrypto%2Craccoonbrand%2Cradaquesttcg%2Cradiosilence%2Crainbowheads%2Crarezcollect%2Crealartifact%2Creallifereal%2Crealoriginal%2Crealworld144%2Crebelrabbits%2Crebycommisso%2Credplanetart%2Cretrofutures%2Croardigiarts%2Crplanet%2Cruummspringa%2Csacredcircle%2Csamsonsamson%2Csarahjeanpic%2Csavantcollec%2Cscrewubearss%2Cscrtgeometry%2Cseaglassnfts%2Cseedphrases1%2Cseedrnftrees%2Cseeingnft111%2Csenorlupeoke%2Csgsdesign111%2Cshapeswaxnft%2Cshipplememes%2Csigilsdming1%2Csillypsybenx%2Cskatecoinwax%2Csketchsquad1%2Cskidikapleh3%2Cskullartlife%2Cskullhead225%2Csmallcircles%2Csmartowl1123%2Csn3jdargll35%2Csock.mafia%2Csolarsystem1%2Csometimesnft%2Csoundzonenft%2Cspace1catzzz%2Cspacedoutpak%2Cspacequbeadv%2Cspartancoins%2Cspiralsplash%2Csplintercard%2Csplintrlands%2Cssaintmotell%2Cssbuybitcoin%2Cstackofcards%2Cstampee1234b%2Cstarcardscpt%2Csteampunk121%2Cstf.capcom%2Cstickypeople%2Cstoccistudio%2Cstrattonsire%2Cstreetscapes%2Cstuffndigart%2Csunriseonwax%2Csunybunnies1%2Csupergeek111%2Ctachitachi13%2Ctcinventions%2Ctechnonation%2Ctenminuteart%2Ctheartisyart%2Cthebrickings%2Cthecanvases1%2Cthedaysofnft%2Cthederpycats%2Ctheflatlines%2Cthegeomatrix%2Ctheniftyshop%2Ctheonlykarma%2Cthepomodoros%2Cthepupparazi%2Ctherarebits1%2Ctherealnacho%2Ctheshapesnft%2Cthewaxman111%2Ctidbytsnfts1%2Ctimelessness%2Ctokenhead%2Ctoltecwarrio%2Ctone2tonenft%2Ctradingpost1%2Ctranscedentl%2Ctravnastyart%2Ctreasury1111%2Ctribalbooks%2Ctribe.ladz%2Ctrocproclock%2Ctwobontanica%2Cuaretheherox%2Cudogoodstuff%2Cultrahorrors%2Cultrarare%2Cundeadcuties%2Cupland.cards%2Cuplandcomics%2Cuplandfanart%2Cuplandhotels%2Cuplandhubnft%2Cupliftart%2Cupliftworld%2Cupliftworld2%2Cuptonemotors%2Cvancitycomic%2Cvesaartonwax%2Cvhsvidsofcat%2Cvideopawerec%2Cvigilantnfts%2Cvirginscards%2Cvirtualakart%2Cvisionarynft%2Cwampastompa1%2Cwarclanstime%2Cwavesilkarts%2Cwax.comics%2Cwaxartcards1%2Cwaxartcollec%2Cwaxartncards%2Cwaxinwgmeets%2Cwaxpackfiend%2Cwaxplorercom%2Cwchdesignxxx%2Cweaponsofpow%2Cwecan%2Cweed4pothead%2Cweirdornot12%2Cwelshdogsart%2Cwilkerphotos%2Cwizardskulll%2Cwizardtavern%2Cwolfpackclub%2Cworldnumberc%2Cworldofgemin%2Cwpcollection%2Cwpcwrarecard%2Cwriter%2Cwvmnftsonwax%2Cxxbleetcolxx%2Cyetigraffiti%2Cyournftsgems%2Czanygumballs%2Czippergirls1%2Czlfhomedecor%2Czombaeseries%2Czombieartist&sort=updated&order=desc`);
    const responseAmount = await fetch(`https://www.api.bloks.io/wax/account/${walletName}?type=getAccountTokens&coreSymbol=WAX`);
    const dataResponseNFT = await responseNFT.json();
    const dataResponseAmount = await responseAmount.json();
    var objReturn = {
      wallet_name: walletName,
      wallet_amount: dataResponseAmount.tokens[0].amount,
      wallet_nfts: []
    }
    dataResponseNFT.data.forEach(nft => {
      objReturn.wallet_nfts.push(nft);
    })
    return objReturn
  }

  const handleChange = (e) => {
    if (e.nativeEvent.data === null) {
      setWalletName(walletName.substring(0, walletName.length - 1));
    }
    else {
      setWalletName(walletName.concat(e.nativeEvent.data));
    }
  }

  const handleClick = () => {
    generateWallet(walletName).then(wallet => {
      setWalletObj(wallet);
      setClick(true);
    }).catch(error => {
      console.log(error);
    })
  }

  const handleDelete = (wlt) => {
    dispatch({ type: 'DELETE_WALLET', payload: wlt });
  }
 
  return (
    <>
      <h1>Coloque suas carteiras aqui, parsa</h1>
      <TextField id="standard-basic" label="carteira" onChange={event => handleChange(event)} />
      <AddIcon style={{ color: green[500] }} fontSize="large" onClick={e => handleClick()} />
      <div>
        {(walletParse[1] !== undefined) &&
          walletParse.map((wlt, index) => {
            if (index !== 0) {
              var arrayUrls = []
              wlt.wallet_nfts.map((nft, indexnft) => {
                const image = walletParse[index].wallet_nfts[indexnft].data.img;
                const imgURL = `https://ipfs.atomichub.io/ipfs/${image}`
                arrayUrls.push(imgURL);
              })
              return (
                <>
                  <h1>{wlt.wallet_name}</h1>
                  <Button variant="contained" color="secondary" onClick={e => handleDelete(wlt)} >Remove</Button>
                  <p>TLM amount: {wlt.wallet_amount}</p>
                  {arrayUrls.map(url => {
                    return (
                      <img class="picture" src={url} width="121" height="155" />
                    )
                  })}
                </>
              )
            }
          })
        }
      </div>
    </>
  );
}

export default App;
