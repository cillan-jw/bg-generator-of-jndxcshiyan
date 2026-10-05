const cWidth=document.getElementById('cWidth')
        const cHeight=document.getElementById('cHeight')
        const topMaskHeight=document.getElementById('topMaskHeight')
        const bottomMaskHeight=document.getElementById('bottomMaskHeight')
        const maskColor=document.getElementById('maskColor')
        const isMaskDecorate=document.getElementById('isMaskDecorate')
        const verticalIndentation=document.getElementById('verticalIndentation')
        const horizontalIndentation=document.getElementById('horizontalIndentation')
        const mainColor=document.getElementById('mainColor')
        const subColor=document.getElementById('subColor')
        const isTopLogo=document.getElementById('isTopLogo')
        const isBottomLogo=document.getElementById('isBottomLogo')
        const isFeitianLineLogo=document.getElementById('isFeitianLineLogo')
        const isFeitianShapeLogo=document.getElementById('isFeitianShapeLogo')
        const isntMaskAffectLogo=document.getElementById('isntMaskAffectLogo')
        const logoColor=document.getElementById('logoColor')
        const isTopImage=document.getElementById('isTopImage')
        const isBottomImage=document.getElementById('isBottomImage')
        const topShapeDirection=document.getElementById('topShapeDirection')
        const bottomShapeDirection=document.getElementById('bottomShapeDirection')
        const cRadiu=document.getElementById('cRadiu')

        const imageBox=document.getElementById('imageBox')

        const applyButton=document.getElementById('applyButton')

        const drawButton=document.getElementById('drawButton')
        const downloadButton=document.getElementById('downloadButton')

        const referenceSelect=document.getElementById('referenceSelect')

        const referenceInputs={
            'pptBackground':{//PPT背景
                'cH':'1080','cW':'1920','mT':'','mB':'','vI':'150','hI':'','radiu':'',
                'mainColor':'["#9c020d","#9c020d"]','subColor':"#013f88",'logoColor':"#ffffff",'maskColor':"#a0a0a0",
                'isMaskDecorate':false,'isntMaskAffectLogo':false,
                'isTopLogo':true,'isBottomLogo':true,'isFeitianLineLogo':true,'isFeitianShapeLogo':false,
                'isTopImage':false,'isBottomImage':true,'topShapeDirection':'right','bottomShapeDirection':'right'
            },
            'ivoryA4':{//象牙白A4
                'cH':'2339','cW':'1654','mT':'','mB':'','vI':'','hI':'','radiu':'',
                'mainColor':'["#fcf6e8","#fcf6e8"]','subColor':"#c8a254",'logoColor':"#9c020d",'maskColor':"#a0a0a0",
                'isMaskDecorate':false,'isntMaskAffectLogo':false,
                'isTopLogo':true,'isBottomLogo':true,'isFeitianLineLogo':false,'isFeitianShapeLogo':false,
                'isTopImage':true,'isBottomImage':true,'topShapeDirection':'right','bottomShapeDirection':'right'
            },
            'ruiyaRedA4':{//睿雅红A4
                'cH':'2339','cW':'1654','mT':'','mB':'','vI':'','hI':'','radiu':'',
                'mainColor':'["#9c020d","#9c020d"]','subColor':"#013f88",'logoColor':"#ffffff",'maskColor':"#a0a0a0",
                'isMaskDecorate':false,'isntMaskAffectLogo':false,
                'isTopLogo':true,'isBottomLogo':true,'isFeitianLineLogo':false,'isFeitianShapeLogo':false,
                'isTopImage':true,'isBottomImage':true,'topShapeDirection':'right','bottomShapeDirection':'right'
            },
            'ivoryPoster':{//象牙白海报
                'cH':'2339','cW':'1654','mT':'280','mB':'280','vI':'','hI':'','radiu':'',
                'mainColor':'["#fcf6e8","#fcf6e8"]','subColor':"#c8a254",'logoColor':"#ffffff",'maskColor':"#9c020d",
                'isMaskDecorate':true,'isntMaskAffectLogo':true,
                'isTopLogo':true,'isBottomLogo':true,'isFeitianLineLogo':false,'isFeitianShapeLogo':false,
                'isTopImage':true,'isBottomImage':true,'topShapeDirection':'left','bottomShapeDirection':'right'
            },
            'banner':{//横幅
                'cH':'500','cW':'4000','mT':'','mB':'','vI':'','hI':'','radiu':'',
                'mainColor':'["#9c020d","#9c020d"]','subColor':"#013f88",'logoColor':"#ffffff",'maskColor':"#a0a0a0",
                'isMaskDecorate':false,'isntMaskAffectLogo':false,
                'isTopLogo':false,'isBottomLogo':false,'isFeitianLineLogo':false,'isFeitianShapeLogo':false,
                'isTopImage':false,'isBottomImage':true,'topShapeDirection':'right','bottomShapeDirection':'both'
            },
            'ruiyaRedToast':{//睿雅红提示语
                'cH':'800','cW':'2200','mT':'','mB':'','vI':'','hI':'','radiu':'100',
                'mainColor':'["#9c020d","#9c020d"]','subColor':"#CC4F4B",'logoColor':"#ffffff",'maskColor':"#a0a0a0",
                'isMaskDecorate':false,'isntMaskAffectLogo':false,
                'isTopLogo':true,'isBottomLogo':true,'isFeitianLineLogo':false,'isFeitianShapeLogo':false,
                'isTopImage':false,'isBottomImage':true,'topShapeDirection':'right','bottomShapeDirection':'right'
            },
            'xiulvBlueToast':{//修律蓝提示语
                'cH':'800','cW':'2200','mT':'','mB':'','vI':'','hI':'','radiu':'100',
                'mainColor':'["#013f88","#013f88"]','subColor':"#6290C4",'logoColor':"#ffffff",'maskColor':"#a0a0a0",
                'isMaskDecorate':false,'isntMaskAffectLogo':false,
                'isTopLogo':true,'isBottomLogo':true,'isFeitianLineLogo':false,'isFeitianShapeLogo':false,
                'isTopImage':false,'isBottomImage':true,'topShapeDirection':'right','bottomShapeDirection':'right'
            }
        }
        function applyReference(referenceInputName){
            const target=referenceInputs[referenceInputName]
            cHeight.value=target.cH
            cWidth.value=target.cW
            topMaskHeight.value=target.mT
            bottomMaskHeight.value=target.mB
            verticalIndentation.value=target.vI
            horizontalIndentation.value=target.hI
            cRadiu.value=target.radiu
            mainColor.value=target.mainColor
            subColor.value=target.subColor
            logoColor.value=target.logoColor
            maskColor.value=target.maskColor
            isMaskDecorate.checked=target.isMaskDecorate
            isntMaskAffectLogo.checked=target.isntMaskAffectLogo
            isTopLogo.checked=target.isTopLogo
            isBottomLogo.checked=target.isBottomLogo
            isFeitianLineLogo.checked=target.isFeitianLineLogo
            isFeitianShapeLogo.checked=target.isFeitianShapeLogo
            isTopImage.checked=target.isTopImage
            isBottomImage.checked=target.isBottomImage
            topShapeDirection.value=target.topShapeDirection
            bottomShapeDirection.value=target.bottomShapeDirection;
            [mainColor,subColor,logoColor,maskColor].forEach(e=>{
                e.dispatchEvent(new Event('change',{bubbles:true}))
            })
        }
        //实时更新html
        drawButton.addEventListener('click',function(){
            readyToDraw('draw')
        })
        downloadButton.addEventListener('click',function(){
            readyToDraw('download')
        });
        [subColor,maskColor,logoColor].forEach(e=>{
            e.addEventListener('change',function(){
                e.nextSibling.nextSibling.children[0].style.color=e.value
            })
        })
        mainColor.addEventListener('change',function(){
            mainColor.nextSibling.nextSibling.children[0].style.color=JSON.parse(mainColor.value)[0]
            mainColor.nextSibling.nextSibling.children[1].style.color=JSON.parse(mainColor.value)[1]
        })
        applyButton.addEventListener('click',function(){
            applyReference(referenceSelect.value)
            drawButton.click()
        })
        //加载模板图
        let imageArray
        let bottomShapeSvg,topShapeSvg,bottomShapeSrc,topShapeSrc,bottomLogoSrc,topLogoSrc,feitianLineLogosrc,feitianShapeLogosrc
        bottomShapeSrc='col/col7001/bottom-shape.svg'
        topShapeSrc='col/col7001/top-shape.svg'
        maskDecorationSrc='col/col7001/mask-decoration.svg'
        topLogoSrc='col/col7001/top-logo.png'
        bottomLogoSrc='col/col7001/bottom-logo.png'
        feitianLineLogosrc='col/col7001/feitian-line.png'
        feitianShapeLogosrc='col/col7001/feitian-shape.png'
        const srcArray=[bottomShapeSrc,topShapeSrc,topLogoSrc,bottomLogoSrc,feitianLineLogosrc,feitianShapeLogosrc,maskDecorationSrc]
        function loadImage(src){
            return new Promise((resolve, reject) => {
                const img=new Image()
                img.onload=()=>resolve(img)
                img.onerror=reject
                img.src=src
            })
        }
        promiseArray=[]
        srcArray.forEach(item=>{
            promiseArray.push(loadImage(item))
        })
        Promise.all(promiseArray).then(imgs=>{
            imageArray=imgs
            listDraw()
            if(imageArray==undefined){
            alert('图片加载失败，请刷新重试。')
        }})
        //检查输入
        function checkInput(inputDom,minValue,placeholder){
            let inputNum
            if(/^-?\d+$/.test(inputDom.value)){
                inputNum=parseInt(inputDom.value)
                if((inputNum<minValue)){
                    alert('请输入有效值！')
                    return 'Invalid input: Illegal value.'
                }
            }else if(inputDom.value.length==0){
                return placeholder
            }else{
                alert('请输入整数值！')
                return 'Invalid input: Not an integer.'
            }
            return inputNum
        }
        //队列绘制
        const drawList=[]
        function listDraw(){
            if(imageArray.length===0){
                return
            }
            while(drawList.length>0){
                const drawRequest=drawList.shift()
                try{
                    mainDraw(drawRequest.userInputs,drawRequest.allCanvas,drawRequest.require)
                }catch(err){
                    console.error('Failed to draw:',err,drawRequest)
                }
                
            }
        }
        //绘制准备
        function readyToDraw(require){
            let cHNum,cWNum,mTNum,mBNum,vINum,hINum
            cHNum=checkInput(cHeight,1,null)
            cWNum=checkInput(cWidth,1,null)
            mTNum=checkInput(topMaskHeight,0,0)
            mBNum=checkInput(bottomMaskHeight,0,0)
            vINum=checkInput(verticalIndentation,0,0)
            hINum=checkInput(horizontalIndentation,0,0)
            radiuNum=checkInput(cRadiu,0,0)
            if([cHNum,cWNum,mTNum,mBNum,vINum,hINum,radiuNum].some(item=>typeof item==='string')){
                return
            }
            if(cWNum<=2*hINum){
                alert('宽度不足，请输入有效值。')
                return
            }
            if(cHNum<=mTNum+mBNum+2*vINum){
                alert('高度不足，请输入有效值。')
                return
            }
            const userInputs={
                'cHNum':cHNum,
                'cWNum':cWNum,
                'mTNum':mTNum,
                'mBNum':mBNum,
                'vINum':vINum,
                'hINum':hINum,
                'radiuNum':radiuNum,
                'mainColor':JSON.parse(mainColor.value),
                'subColor':subColor.value,
                'logoColor':logoColor.value,
                'maskColor':maskColor.value,
                'isMaskDecorate':isMaskDecorate.checked,
                'isTopLogo':isTopLogo.checked,
                'isBottomLogo':isBottomLogo.checked,
                'isFeitianLineLogo':isFeitianLineLogo.checked,
                'isFeitianShapeLogo':isFeitianShapeLogo.checked,
                'isntMaskAffectLogo':isntMaskAffectLogo.checked,
                'isTopImage':isTopImage.checked,
                'isBottomImage':isBottomImage.checked,
                'topShapeDirection':topShapeDirection.value,
                'bottomShapeDirection':bottomShapeDirection.value
            }
            const allCanvas={}
            allCanvas.drawColorCanvas=document.createElement('canvas')//着色
            allCanvas.drawColorCtx=allCanvas.drawColorCanvas.getContext('2d')
            allCanvas.innerInsetCanvas=document.createElement('canvas')//缩进内
            allCanvas.innerInsetCtx=allCanvas.innerInsetCanvas.getContext('2d')
            allCanvas.outerMaskCanvas=document.createElement('canvas')//遮罩外
            allCanvas.outerMaskCtx=allCanvas.outerMaskCanvas.getContext('2d')
            allCanvas.outputCanvas=document.createElement('canvas')//输出
            allCanvas.outputCtx=allCanvas.outputCanvas.getContext('2d')
            allCanvas.outerMaskCanvas.width=allCanvas.outputCanvas.width=cWNum
            allCanvas.outerMaskCanvas.height=allCanvas.outputCanvas.height=cHNum
            allCanvas.drawColorCanvas.width=allCanvas.innerInsetCanvas.width=cWNum-2*hINum
            allCanvas.drawColorCanvas.height=allCanvas.innerInsetCanvas.height=cHNum-mTNum-mBNum-2*vINum
            const drawRequest={
                'userInputs':userInputs,
                'allCanvas':allCanvas,
                'require':require
            }
            drawList.push(drawRequest)
            listDraw()
        }
        function drawShape(drawColorCanvas,drawColorCtx,targetColor,shapeType,ratioType,shapeDirection,innerInsetCanvas,innerInsetCtx){
            const xm=drawColorCanvas.width
            const ym=drawColorCanvas.height
            const shapeSite={
                'top':{
                    'wide':{'x':xm-0.4*ym,'y':0,'w':0.4*ym,'h':0.4*ym},
                    'wideish':{'x':0.8*xm,'y':0,'w':0.2*xm,'h':0.2*xm},
                    'tallish':{'x':xm-0.16*ym,'y':0,'w':0.16*ym,'h':0.16*ym},
                    'tall':{'x':0.84*xm,'y':0,'w':0.16*xm,'h':0.16*xm},
                    'index':1
                },
                'bottom':{
                    'wide':{'x':xm-0.8*ym,'y':0.4*ym,'w':0.8*ym,'h':0.6*ym},
                    'wideish':{'x':0.6*xm,'y':ym-0.3*xm,'w':0.4*xm,'h':0.3*xm},
                    'tallish':{'x':xm-0.32*ym,'y':0.76*ym,'w':0.32*ym,'h':0.24*ym},
                    'tall':{'x':0.68*xm,'y':ym-0.24*xm,'w':0.32*xm,'h':0.24*xm},
                    'index':0
                }
            }
            const siteGroup=shapeSite[shapeType][ratioType]
            drawColorCtx.drawImage(imageArray[shapeSite[shapeType].index],siteGroup.x,siteGroup.y,siteGroup.w,siteGroup.h)
            drawColorCtx.globalCompositeOperation='source-in'
            drawColorCtx.fillStyle=targetColor
            drawColorCtx.fillRect(0,0,xm,ym)
            drawColorCtx.globalCompositeOperation='source-over'
            if(shapeDirection!=='left'){
                innerInsetCtx.drawImage(drawColorCanvas,0,0)
            }
            if(shapeDirection!=='right'){
                innerInsetCtx.scale(-1,1)
                innerInsetCtx.drawImage(drawColorCanvas,-xm,0)
                innerInsetCtx.scale(-1,1)
            }
            drawColorCtx.clearRect(0,0,xm,ym)
        }
        function drawLogo(drawColorCanvas,drawColorCtx,outerMaskCanvas,outerMaskCtx,logoColor,logoType,ratioType,mTNum,mBNum,radiuNum,isntMaskAffectLogo){
            const xm=outerMaskCanvas.width
            const yb=outerMaskCanvas.height
            let ym,drawLogoCanvasSite
            if(isntMaskAffectLogo){
                ym=yb
                drawLogoCanvasSite=0
            }else{
                ym=yb-mTNum-mBNum
                drawLogoCanvasSite=mTNum
            }
            drawColorCanvas.width=xm
            drawColorCanvas.height=ym
            const logoSite={
                'top':{
                    'wide':{'x':0.04*xm+0.2*radiuNum,'y':0.04*ym+0.15*radiuNum,'w':0.54*ym,'h':0.09*ym},
                    'wideish':{'x':0.04*xm+0.2*radiuNum,'y':0.04*ym+0.15*radiuNum,'w':0.3*xm,'h':0.05*xm},
                    'tallish':{'x':0.04*xm+0.2*radiuNum,'y':0.04*ym+0.15*radiuNum,'w':0.36*xm,'h':0.06*xm},
                    'tall':{'x':0.04*xm+0.2*radiuNum,'y':0.04*ym+0.15*radiuNum,'w':0.36*xm,'h':0.06*xm},
                    'index':2
                },
                'bottom':{
                    'wide':{'x':0.5*xm-0.25*ym,'y':0.91*ym,'w':0.5*ym,'h':0.05*ym},
                    'wideish':{'x':0.35*xm,'y':0.96*ym-0.03*xm,'w':0.3*xm,'h':0.03*xm},
                    'tallish':{'x':0.3*xm,'y':0.96*ym-0.04*xm,'w':0.4*xm,'h':0.04*xm},
                    'tall':{'x':0.3*xm,'y':0.96*ym-0.04*xm,'w':0.4*xm,'h':0.04*xm},
                    'index':3
                },
                'feitian-line':{
                    'wide':{'x':0.96*xm-0.2*ym,'y':0.04*ym,'w':0.2*ym,'h':0.2*ym},
                    'wideish':{'x':0.81*xm,'y':0.04*ym,'w':0.15*xm,'h':0.15*xm},
                    'tallish':{'x':0.81*xm,'y':0.04*ym,'w':0.15*xm,'h':0.15*xm},
                    'tall':{'x':0.88*xm,'y':0.04*ym,'w':0.08*xm,'h':0.08*xm},
                    'index':4
                },
                'feitian-shape':{
                    'wide':{'x':0.96*xm-0.2*ym,'y':0.04*ym,'w':0.2*ym,'h':0.2*ym},
                    'wideish':{'x':0.81*xm,'y':0.04*ym,'w':0.15*xm,'h':0.15*xm},
                    'tallish':{'x':0.81*xm,'y':0.04*ym,'w':0.15*xm,'h':0.15*xm},
                    'tall':{'x':0.88*xm,'y':0.04*ym,'w':0.08*xm,'h':0.08*xm},
                    'index':5
                }
            }
            const siteGroup=logoSite[logoType][ratioType]
            drawColorCtx.drawImage(imageArray[logoSite[logoType].index],siteGroup.x,siteGroup.y,siteGroup.w,siteGroup.h)
            drawColorCtx.globalCompositeOperation='source-in'
            drawColorCtx.fillStyle=logoColor
            drawColorCtx.fillRect(0,0,xm,ym)
            drawColorCtx.globalCompositeOperation='source-over'
            outerMaskCtx.drawImage(drawColorCanvas,0,drawLogoCanvasSite)
            drawColorCtx.clearRect(0,0,xm,ym)
        }
        function drawMaskDecoration(drawColorCanvas,drawColorCtx,targetColor,decorationDirection,mHNum,outerMaskCanvas,outerMaskCtx){
            const xm=outerMaskCanvas.width
            const ym=outerMaskCanvas.height
            const dH=Math.min(mHNum,0.15*xm)
            const dW=3*dH
            drawColorCanvas.width=xm
            drawColorCanvas.height=ym
            drawColorCtx.drawImage(imageArray[6],0,ym-mHNum,dW,dH)
            drawColorCtx.globalCompositeOperation='source-in'
            drawColorCtx.fillStyle=targetColor
            drawColorCtx.fillRect(0,0,xm,ym)
            drawColorCtx.globalCompositeOperation='source-over'
            if(decorationDirection=='bottom'){
                outerMaskCtx.drawImage(drawColorCanvas,0,0)
            }else if(decorationDirection=='top'){
                outerMaskCtx.translate(xm,ym)
                outerMaskCtx.scale(-1,-1)
                outerMaskCtx.drawImage(drawColorCanvas,0,0)
                outerMaskCtx.scale(-1,-1)
                outerMaskCtx.translate(-xm,-ym)
            }
            drawColorCtx.clearRect(0,0,xm,ym)
        }
        function mainDraw(userInputs,allCanvas,require){
            //背景底板
            let linearGrddient=allCanvas.outerMaskCtx.createLinearGradient(0,0,userInputs.cWNum,0)
            linearGrddient.addColorStop(0,userInputs.mainColor[0])
            linearGrddient.addColorStop(1,userInputs.mainColor[1])
            allCanvas.outerMaskCtx.fillStyle=linearGrddient
            allCanvas.outerMaskCtx.fillRect(0,0,userInputs.cWNum,userInputs.cHNum)
            //比例归属
            const ratioNum=allCanvas.innerInsetCanvas.width/allCanvas.innerInsetCanvas.height
            let ratioType
            if(ratioNum>=2){
                ratioType='wide'
            }else if(ratioNum>=1){
                ratioType='wideish'
            }else if(ratioNum>0.48){
                ratioType='tallish'
            }else{
                ratioType='tall'
            }
            //背景图形
            if(userInputs.isBottomImage){
                drawShape(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,
                    userInputs.subColor,'bottom',ratioType,userInputs.bottomShapeDirection,
                    allCanvas.innerInsetCanvas,allCanvas.innerInsetCtx
                )
            }
            if(userInputs.isTopImage){
                drawShape(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,
                    userInputs.subColor,'top',ratioType,userInputs.topShapeDirection,
                    allCanvas.innerInsetCanvas,allCanvas.innerInsetCtx
                )
            }
            allCanvas.outerMaskCtx.drawImage(allCanvas.innerInsetCanvas,userInputs.hINum,userInputs.vINum+userInputs.mTNum)
            allCanvas.innerInsetCanvas.width=0
            allCanvas.innerInsetCanvas.height=0
            allCanvas.innerInsetCanvas=null
            //遮罩
            allCanvas.outerMaskCtx.fillStyle=userInputs.maskColor
            allCanvas.outerMaskCtx.fillRect(0,0,userInputs.cWNum,userInputs.mTNum)
            allCanvas.outerMaskCtx.fillRect(0,userInputs.cHNum-userInputs.mBNum,userInputs.cWNum,userInputs.mBNum)
            if(userInputs.isMaskDecorate){
                drawMaskDecoration(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,linearGrddient,'top',userInputs.mTNum,allCanvas.outerMaskCanvas,allCanvas.outerMaskCtx)
                drawMaskDecoration(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,linearGrddient,'bottom',userInputs.mBNum,allCanvas.outerMaskCanvas,allCanvas.outerMaskCtx)
            }
            //标识
            if(userInputs.isTopLogo){
                drawLogo(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,allCanvas.outerMaskCanvas,allCanvas.outerMaskCtx,
                    userInputs.logoColor,'top',ratioType,userInputs.mTNum,userInputs.mBNum,userInputs.radiuNum,userInputs.isntMaskAffectLogo
                )
            }
            if(userInputs.isBottomLogo){
                drawLogo(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,allCanvas.outerMaskCanvas,allCanvas.outerMaskCtx,
                    userInputs.logoColor,'bottom',ratioType,userInputs.mTNum,userInputs.mBNum,userInputs.radiuNum,userInputs.isntMaskAffectLogo
                )
            }
            if(userInputs.isFeitianLineLogo){
                drawLogo(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,allCanvas.outerMaskCanvas,allCanvas.outerMaskCtx,
                    userInputs.logoColor,'feitian-line',ratioType,userInputs.mTNum,userInputs.mBNum,userInputs.radiuNum,userInputs.isntMaskAffectLogo
                )
            }
            if(userInputs.isFeitianShapeLogo){
                drawLogo(allCanvas.drawColorCanvas,allCanvas.drawColorCtx,allCanvas.outerMaskCanvas,allCanvas.outerMaskCtx,
                    userInputs.logoColor,'feitian-shape',ratioType,userInputs.mTNum,userInputs.mBNum,userInputs.radiuNum,userInputs.isntMaskAffectLogo
                )
            }
            //圆角
            allCanvas.drawColorCanvas.width=0
            allCanvas.drawColorCanvas.height=0
            allCanvas.drawColorCanvas=null
            allCanvas.outputCtx.beginPath()
            allCanvas.outputCtx.roundRect(0,0,userInputs.cWNum,userInputs.cHNum,userInputs.radiuNum)
            allCanvas.outputCtx.clip()
            allCanvas.outputCtx.drawImage(allCanvas.outerMaskCanvas,0,0)
            allCanvas.outputCtx.restore()
            allCanvas.outerMaskCanvas.width=0
            allCanvas.outerMaskCanvas.height=0
            allCanvas.outerMaskCanvas=null
            const url=allCanvas.outputCanvas.toDataURL('image/png')
            allCanvas.outputCanvas.width=0
            allCanvas.outputCanvas.height=0
            allCanvas.outputCanvas=null
            const canvasImg=document.createElement('img')
            canvasImg.className='canvasImg'
            canvasImg.src=url
            imageBox.innerHTML=''
            imageBox.appendChild(canvasImg)
            if (require=='download'){
                const link=document.createElement('a')
                link.download=`${Date.now()}.png`
                link.href=url
                link.click()
            }
        }