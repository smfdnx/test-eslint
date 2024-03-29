module.exports = {
    "rules": { // 自定义规则 格式： ”规则名称”:error级别系数
        // ======错误处理相关problem
        // 打包不允许有debugger
        "no-debugger": 0, // TODOL
        // 允许console
        "no-console": 0,
        // 允许alert
        "no-alert": 0,
        // 允许使用new构造一个实例后不赋值
        "no-new": 0,
        // 不能出现空语句块 TODOL
        "no-empty": ["error", {
            allowEmptyCatch: true, // 允许空catch子句
        }],
        // 允许for循环中使用await
        "no-await-in-loop": 0,
        // 允许使用continue
        "no-continue": 0,
        // 允许 a && a() 这样的表达式
        "no-unused-expressions": 0,
        // 禁止变量声明与外层作用域的变量同名
        "no-shadow": 0,
        // 可以同时使用多种操作符 a || b && c TODOL
        "no-mixed-operators": 0,
        // Promise.reject(xx)的入参可以是非Error对象
        "prefer-promise-reject-errors": 0,
        // 强制使用强等
        "eqeqeq": 0,
        // parseInt不强制传第二个参数
        "radix": 0,
        // for-in中不强制使用if
        "guard-for-in": 0,
        // 可以直接调用内置方法
        "no-prototype-builtins": 0,
        // 允许在条件语句中使用赋值运算符 while (a = 3) {
        "no-cond-assign": 0, 
        // 允许break、return相关方法后出现代码 TODOL
        "no-unreachable": 0,
        // 不更新的变量可以不使用const
        "prefer-const": 0,
        // return可以不返回某个值
        "consistent-return": 0,
        // 允许位运算 TODOL
        "no-bitwise": 0,

        // 禁止在变量声明前使用，不校验
        "no-use-before-define": 0,
        // class方法不强制使用this
        "class-methods-use-this": 0,
        // 不限制禁止特定语法
        "no-restricted-syntax": 0,
        // 对方法变量重新赋值，暂不限制
        "no-param-reassign": 0,
        // return await 不限制
        "no-return-await": 0,
        // ======layout格式相关
        // 不允许使用_加入到变量名中
        "no-underscore-dangle": 0, // TODO: 有报错的29个，需要修复 "error"
        // 箭头函数必须返回{}体，不必要，可以 () => 0
        "arrow-body-style": 0,
        // 不强制使用驼峰命名，有些场景会出现a_b这样的形式
        "camelcase": 0,
        // 对象使用解构，数组不要求
        "prefer-destructuring": 0, // TODO: 有报错25个，需要修复 ["error", { object: true, array: false }]
        // 禁止使用不必要的转义符号 
        "no-useless-escape": 0, // TODO: 有7报错，"error" 如果您不想收到不必要的转义通知，可以安全地禁用此规则。 mfangxin:0
        // 允许++/--操作符
        "no-plusplus": 0,
        // 可以在常规字符串中使用${} TODOL mfangxin:0
        "no-template-curly-in-string": 0,
        // 可以使用匿名方法
        "func-names": 0,
        // else中可以使用单独的if
        "no-lonely-if": 0,
        // 可以使用tab
        "no-tabs": 0,
        // 全局变量不控制
        "no-restricted-globals": 0,
        // 限制可以作为例外抛出的内容
        "no-throw-literal": 0,
        // 允许不为运算符强制执行一致的换行样式 mfangxin:0 TODOL
        "linebreak-style": 2,
        // 使用4个空格的缩进 TODOL mfangxin 2, 4
        "indent": ["error", 4, {
            SwitchCase: 1
        }],
        // 不限制每行最大字符 TODOL
        "max-len": 0,
        // 要求对象字面量简写语法 {a: a} => { a }
        "object-shorthand": 0, // TODOL: 有自动修复 ["error", "always"]
        // 对象换行符暂不限制
        "object-curly-newline": 0,
        // 换行要求
        "padding-line-between-statements": [
            "warn",
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": "block-like", "next": "*" },
            { "blankLine": "always", "prev": "block", "next": "*" },
            { "blankLine": "always", "prev": "function", "next": "*" }
        ],

        // ======import相关 TODOL还要再了解下是干啥用的都
        // 取消对文件扩展名的验证
        "import/extensions": 0,
        "import/named": 0, // TODOL mfangxin:0 其他项目没有
        "import/order": 1,
        "import/no-unresolved": 0, // 取消自动解析路径，以此开启alias的别名路径设置
        "import/prefer-default-export": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,


        // =========== vue相关
        // 1. 建议添加
        // html空格处理，4个空格
        "vue/html-indent": ["error", 4],

        // 2. TODOL
        // 不允许在computed中对依赖项重新赋值
        "vue/no-side-effects-in-computed-properties": 0, // 有报错需要修复 "error"
        // 多个属性换行展示 TODOL
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 2 // 一行最多显示2个属性
            }
        }],
        // 组件名驼峰使用 如：组件名component-one会报错，自动修复
        "vue/component-name-in-template-casing": ["error", "PascalCase", {
            "ignores": ["/^mt-/"], // 排除mintUI
        }],
        // 属性顺序 自动修复
        "vue/attributes-order": ["error", {
            order: [
                'GLOBAL',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'SLOT',
                'DEFINITION',
                'TWO_WAY_BINDING',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_ATTR',
                'CONTENT',
                'LIST_RENDERING',
                'EVENTS',
            ],
        }],     
        // 组件属性顺序 props\methids
        "vue/order-in-components": [1, {
            order: [
                "el",
                "name",
                "mixins",
                "extends",
                "components",
                ["provide", "inject"],
                ["props", "propsData"],
                "directives",
                "filters",
                "data",
                "computed",
                "watch",
                "LIFECYCLE_HOOKS",
                "methods",
            ],
        }],

        // TODOL 下面一堆 不是很明白为什么报错，不加吧
        // 组件的name不能和标签重名(禁止在组件定义中使用保留名称)
        // "vue/no-reserved-component-names": "error", //
        // 清理未使用的ref
        // "vue/no-unused-refs": "error",
        // // 不必要的模版字符串 {{'124'}}
        // "vue/no-useless-mustaches": "error",
        // // template/script中间有空格 TODOL
        // "vue/padding-line-between-blocks": "error",
        // $emit方法命名格式 on-close
        // "vue/custom-event-name-casing": ["error", "kebab-case"],
        
        // 3. recommended 默认开启 一般是警告+自动修复
        // html 标签右括号前不允许有空格，自关闭标签斜杠前必须有空格
        "vue/html-closing-bracket-spacing": "error",
        // 强制 HTML 属性的引号使用双引号
        'vue/html-quotes': ['error', 'double'],
        // 没有内容的元素强制使用自关闭标签
        'vue/html-self-closing': 'error',
        // 右括号前换行规则：属性换行则换行，属性不换行则不换行
        "vue/html-closing-bracket-newline": "error",
        // {{ a }}需要有空格
        "vue/mustache-interpolation-spacing": "error",
        // 属性之间不能有多个空格
        "vue/no-multi-spaces": "error",
        // 禁止属性中等号周围的空格
        "vue/no-spaces-around-equal-signs-in-attribute": "error",
        // props需要有默认值
        "vue/require-default-prop": "error",
        // props需要有类型
        "vue/require-prop-types": "error",
        // 使用:a不使用v-bind:a
        "vue/v-bind-style": "error",
        // 使用@click不使用v-on:click
         "vue/v-on-style": "error",
        // html中不能使用this
        "vue/this-in-template": "error" // 无自动修复

        
        // 4. 不需要加，默认生效


        // 5. 未处理
        // // 使用自关闭标签
        // "vue/html-self-closing": "error",
        // // 关闭标签单独在一行
        // "vue/html-closing-bracket-newline": "error",
        // // 多个属性换行展示 TODOL
        // "vue/max-attributes-per-line": ["error", {
        //     "singleline": {
        //         "max": 2 // 一行最多显示1个属性
        //     }
        // }],
        // // {{ a }}需要有空格
        // "vue/mustache-interpolation-spacing": "error",
        // // 属性之间不能有多个空格
        // "vue/no-multi-spaces": "error",
        // // 禁止属性中等号周围的空格
        // "vue/no-spaces-around-equal-signs-in-attribute": "error",
        // // props需要有默认值
        // "vue/require-default-prop": "error",
        // // props需要有类型
        // "vue/require-prop-types": "error",
        // // 使用:a不使用v-bind:a
        // "vue/v-bind-style": "error",
        // // 使用@click不使用v-on:click
        // "vue/v-on-style": "error",
        // // html中不能使用this
        // "vue/this-in-template": "error",
        // // 组件驼峰使用
        // "vue/component-name-in-template-casing": ["error", "PascalCase", {
        //     "ignores": [/^mt-/], // 排除mintUI
        // }],
        // // 组件的name不能和标签重名(禁止在组件定义中使用保留名称) TODOL 
        // "vue/no-reserved-component-names": "error",
        // // 清理未使用的props
        // "vue/no-unused-properties": "error",
        // // 清理未使用的ref
        // "vue/no-unused-refs": "error",
        // // 不必要的模版字符串 {{'124'}}
        // "vue/no-useless-mustaches": "error",
        // // template/script中间有空格 TODOL
        // "vue/padding-line-between-blocks": "error",
        // // $emit方法命名格式 on-close
        // "vue/custom-event-name-casing": ["error", "kebab-case"],
        // // 属性顺序
        // "vue/attributes-order": ["error", {
        //     order: [
        //         'GLOBAL',
        //         'CONDITIONALS',
        //         'RENDER_MODIFIERS',
        //         'SLOT',
        //         'DEFINITION',
        //         'TWO_WAY_BINDING',
        //         'UNIQUE',
        //         'TWO_WAY_BINDING',
        //         'OTHER_ATTR',
        //         'CONTENT',
        //         'LIST_RENDERING',
        //         'EVENTS',
        //     ],
        // }],
        // // 组件属性顺序
        // "vue/order-in-components": ["warning", {
        //     order: [
        //         "el",
        //         "name",
        //         "mixins",
        //         "extends",
        //         "components",
        //         ["provide", "inject"],
        //         ["props", "propsData"],
        //         "directives",
        //         "filters",
        //         "data",
        //         "computed",
        //         "watch",
        //         "LIFECYCLE_HOOKS",
        //         "methods",
        //     ],
        // }],
    },
}