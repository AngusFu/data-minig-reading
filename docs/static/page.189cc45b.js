__jsonpResolve(function(){var t={exports:{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"markdown-body"},[a("h1",[t._v("引论部分")]),t._v(" "),a("p",[t._v("这部分主要是概念介绍。")]),t._v(" "),a("h2",{attrs:{id:"gong-neng-zhu-yao-fen-wei-liang-da-lei"}},[t._v("功能主要分为两大类")]),t._v(" "),t._m(0),t._v(" "),a("h4",[t._v("细分——")]),t._v(" "),t._m(1),t._v(" "),a("h2",{attrs:{id:"ding-yi-ji-miao-shu"}},[t._v("定义及描述")]),t._v(" "),a("h3",{attrs:{id:"shu-ju-te-zheng-hua-data-characterization"}},[t._v("数据特征化（data characterization）")]),t._v(" "),a("p",[t._v("对目标数据的一般特性、特征进行汇总。比如获取用户群体概况。")]),t._v(" "),a("h3",{attrs:{id:"shu-ju-qu-fen-data-discrimination"}},[t._v("数据区分（data discrimination）")]),t._v(" "),t._m(2),t._v(" "),a("h3",{attrs:{id:"pin-fan-mo-shi-frequent-pattern"}},[t._v("频繁模式（frequent pattern）")]),t._v(" "),a("p",[t._v("发现数据之间的关联、相关性。三种类型的频繁模式 ——")]),t._v(" "),a("h4",[t._v("1、频繁项集")]),t._v(" "),a("p",[t._v("频繁在事务数据集中一起出现的集合。经典场景：啤酒和纸尿裤。")]),t._v(" "),a("h4",[t._v("2、频繁子序列（序列模式）")]),t._v(" "),a("p",[t._v("前后行为之间的关联形成序列，如先买相机，后买内存卡。")]),t._v(" "),a("h4",[t._v("3、频繁子结构")]),t._v(" "),a("p",[t._v("涉及不同的结构形式（图、树、格）。可以与前面两项结合在一起。")]),t._v(" "),a("h3",{attrs:{id:"fen-lei-yu-hui-gui"}},[t._v("分类与回归")]),t._v(" "),a("p",[t._v("数据 => 模型 => 预测")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("导出的模型可以有多种描述方式 ——")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("h3",{attrs:{id:"ju-lei-fen-xi-clustering"}},[t._v("聚类分析（clustering）")]),t._v(" "),a("p",[t._v("最大化类内相似性、最小化类间相似性。")]),t._v(" "),a("h3",{attrs:{id:"chi-qun-dian-outlier-fen-xi"}},[t._v("离群点（outlier）分析")]),t._v(" "),a("p",[t._v("又称为异常挖掘。")]),t._v(" "),a("p",[t._v("噪声 OR 异常？No，需要关注的罕见事件！如信用卡欺诈，账户安全（操作异常）。")]),t._v(" "),t._m(7),t._v(" "),a("h2",{attrs:{id:"suo-you-mo-shi-du-shi-you-qu-de-ma"}},[t._v("所有模式都是有趣的吗")]),t._v(" "),a("h3",{attrs:{id:"shi-me-yang-de-mo-shi-shi-you-qu-de"}},[t._v("什么样的模式是有趣的")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("h4",[t._v("支持度、置信度")]),t._v(" "),a("p",[t._v("对于"),a("span",{staticClass:"inlineMath"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("X")]),t._v(" "),a("mo",[t._v("⇒")]),t._v(" "),a("mi",[t._v("Y")])],1),t._v(" "),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("X \\Rightarrow Y")])],1)],1)],1),t._m(10)])]),t._v("这样的关联模式 ——")]),t._v(" "),t._m(11),t._v(" "),a("div",{staticClass:"math"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mtable",[a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"true"}},[a("mrow",[a("mi",[t._v("s")]),t._v(" "),a("mi",[t._v("u")]),t._v(" "),a("mi",[t._v("p")]),t._v(" "),a("mi",[t._v("p")]),t._v(" "),a("mi",[t._v("o")]),t._v(" "),a("mi",[t._v("r")]),t._v(" "),a("mi",[t._v("t")])],1)],1)],1),t._v(" "),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"true"}},[a("mrow",[a("mrow"),t._v(" "),a("mo",[t._v("(")]),t._v(" "),a("mi",[t._v("X")]),t._v(" "),a("mo",[t._v("⇒")]),t._v(" "),a("mi",[t._v("Y")]),t._v(" "),a("mo",[t._v(")")]),t._v(" "),a("mo",[t._v("=")]),t._v(" "),a("mi",[t._v("P")]),t._v(" "),a("mo",[t._v("(")]),t._v(" "),a("mi",[t._v("X")]),t._v(" "),a("mo",[t._v("∪")]),t._v(" "),a("mi",[t._v("Y")]),t._v(" "),a("mo",[t._v(")")])],1)],1)],1)],1),t._v(" "),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"true"}},[a("mrow",[a("mi",[t._v("c")]),t._v(" "),a("mi",[t._v("o")]),t._v(" "),a("mi",[t._v("n")]),t._v(" "),a("mi",[t._v("f")]),t._v(" "),a("mi",[t._v("i")]),t._v(" "),a("mi",[t._v("d")]),t._v(" "),a("mi",[t._v("e")]),t._v(" "),a("mi",[t._v("n")]),t._v(" "),a("mi",[t._v("c")]),t._v(" "),a("mi",[t._v("e")])],1)],1)],1),t._v(" "),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"true"}},[a("mrow",[a("mrow"),t._v(" "),a("mo",[t._v("(")]),t._v(" "),a("mi",[t._v("X")]),t._v(" "),a("mo",[t._v("⇒")]),t._v(" "),a("mi",[t._v("Y")]),t._v(" "),a("mo",[t._v(")")]),t._v(" "),a("mo",[t._v("=")]),t._v(" "),a("mi",[t._v("P")]),t._v(" "),a("mo",[t._v("(")]),t._v(" "),a("mi",[t._v("X")]),t._v(" "),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),t._v(" "),a("mi",[t._v("Y")]),t._v(" "),a("mo",[t._v(")")])],1)],1)],1)],1)],1)],1),t._v(" "),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n              \\begin{alignedat}{2}\n              support&(X \\Rightarrow Y) = P(X \\cup Y) \\\\\n              confidence&(X \\Rightarrow Y) = P(X | Y)\n              \\end{alignedat}\n            ")])],1)],1)],1),t._m(12)])])]),t._v(" "),a("h4",[t._v("准确率、覆盖率")]),t._v(" "),a("p",[t._v("对于分类规则 ——")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("h2",{attrs:{id:"xiang-guan-ji-zhu"}},[t._v("相关技术")]),t._v(" "),t._m(16),t._v(" "),a("h2",{attrs:{id:"shu-ju-wa-jue-de-zhu-yao-wen-ti"}},[t._v("数据挖掘的主要问题")]),t._v(" "),t._m(17)])},components:{},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("描述性：刻画一般性质")]),t._v(" "),a("li",[t._v("预测性：归纳预测")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("特征化与区分")]),t._v(" "),a("li",[t._v("频繁模式，关联和相关性挖掘")]),t._v(" "),a("li",[t._v("分类与回归")]),t._v(" "),a("li",[t._v("聚类分析")]),t._v(" "),a("li",[t._v("离群点分析")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("提供对比情况，进而可以沿着其他维度"),a("strong",[t._v("下钻")]),t._v("，获取更多信息。比如，什么样的年龄的客户更倾向于购买付费产品。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("分类")]),t._v("：离散、无序的，预测 label")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("回归")]),t._v("：建立连续值函数模型")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("分类规则：IF-THEN")]),t._v(" "),a("li",[t._v("决策树")]),t._v(" "),a("li",[t._v("数学公式")]),t._v(" "),a("li",[t._v("神经网络")]),t._v(" "),a("li",[t._v("其他")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("相关分析")]),t._v("：分类、回归之前，识别"),a("strong",[t._v("显著相关")]),t._v("的属性。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("假定数据模型或概率分布，使用统计检验进行检测")]),t._v(" "),a("li",[t._v("距离度量：远离所有 cluster 的点")]),t._v(" "),a("li",[t._v("基于密度的方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("易于理解")]),t._v(" "),a("li",[t._v("在一定确信度上能够被验证")]),t._v(" "),a("li",[t._v("潜在有用的")]),t._v(" "),a("li",[t._v("新颖的")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"xing-qu-du-de-ke-guan-du-liang"}},[t._v("兴趣度的"),a("strong",{staticStyle:{color:"#ffc300"}},[t._v("客观")]),t._v("度量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("⇒")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("支持度：满足规则的事务占比")]),t._v(" "),a("li",[t._v("置信度：包含 X 也包括 Y 的条件概率")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.7500000000000002em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"3.0000000000000004em","vertical-align":"-1.2500000000000002em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-r"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.7500000000000002em"}},[a("span",{staticStyle:{top:"-3.91em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("t")])])]),a("span",{staticStyle:{top:"-2.41em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("c")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("c")]),a("span",{staticClass:"mord mathit"},[t._v("e")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.2500000000000002em"}})])])]),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.7500000000000002em"}},[a("span",{staticStyle:{top:"-3.91em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("⇒")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("∪")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-2.41em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("⇒")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.2500000000000002em"}})])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("准确率：准确分类的数据占比")]),t._v(" "),a("li",[t._v("覆盖率：规则能够作用的数据百分比")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"xing-qu-du-de-zhu-guan-du-liang"}},[t._v("兴趣度的"),a("strong",{staticStyle:{color:"#ffc300"}},[t._v("主观")]),t._v("度量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("出乎意料的")]),t._v(" "),a("li",[t._v("提供可以采取行动的重要信息（actionable）")]),t._v(" "),a("li",[a("p",[t._v("意料之内的？")]),t._v(" "),a("ul",[a("li",[t._v("与预感相似")]),t._v(" "),a("li",[t._v("证实"),a("strong",{staticStyle:{"text-decoration":"underline"}},[t._v("用户希望")]),t._v("的假设")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("统计学")]),t._v(" "),a("li",[t._v("机器学习")]),t._v(" "),a("li",[t._v("模式识别")]),t._v(" "),a("li",[t._v("数据库、数据仓库")]),t._v(" "),a("li",[t._v("信息检索")]),t._v(" "),a("li",[t._v("可视化")]),t._v(" "),a("li",[t._v("算法")]),t._v(" "),a("li",[t._v("高性能计算")]),t._v(" "),a("li",[t._v("应用领域的技术")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("挖掘方法")]),t._v(" "),a("li",[t._v("用户界面：交互挖掘，可视化……")]),t._v(" "),a("li",[t._v("有效性、可伸缩性")]),t._v(" "),a("li",[t._v("数据库多样性")]),t._v(" "),a("li",[t._v("社会问题：隐私")])])}]}};return t.exports.metaInfo=function(){return{title:"引论部分"}},t.exports.computed={$vars:function(){return{}},$page:function(){var s=this.$route.path;return this.$pages.filter(function(t){return t.path===s})[0]||{}}},t.exports}());