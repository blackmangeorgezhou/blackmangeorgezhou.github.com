var app = new Vue({
    el: '#app',

    data: {
        endTime: '',
        time: {
            M: '',
            D: '',
            h: '',
            m: '',
            s: ''
        }
    },

    computed: {
        countTimeMsg() {
            return `${this.time.h}小时${this.time.m}分钟${this.time.s}秒`;
        }
    },

    methods: {
        setEndTime() {
            const date = new Date();
            this.endTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 24:00:00`;

            this.time.M = date.getMonth() + 1;
            if (this.time.M < 10) {
                this.time.M = `0${this.time.M}`;
            }
            this.time.D = date.getDate();
            if (this.time.D < 10) {
                this.time.D = `0${this.time.D}`;
            }
        },

        countTime() {
            var that = this;
            var interval = setInterval(() => {
                var date = (new Date(that.endTime)) - (new Date()); //计算剩余的毫秒数
                if (date == 0) {
                    that.setEndTime();
                } else {
                    that.time.h = parseInt(date / 1000 / 60 / 60 % 24, 10);
                    that.time.m = parseInt(date / 1000 / 60 % 60, 10);//计算剩余的分钟
                    that.time.s = parseInt(date / 1000 % 60, 10);//计算剩余的秒数 
                }
            }, 1000);
        },

        doRequest() {
            const data = {
                "operationName": "CreatePublishedFormEntry",
                "variables": {
                    "input": {
                        "formId": "uEQB9T",
                        "entryAttributes": {
                            "field_3": "wTJW",
                            "field_1": [
                                {
                                    "api_code": "5Yxp",
                                    "scheduled_at": `2021-${this.time.M}-${this.time.D}T09:00:00+08:00`,
                                    "end_at": `2021-${this.time.M}-${this.time.D}T12:00:00+08:00`,
                                    "number": 1
                                },
                                {
                                    "api_code": "5Yxp",
                                    "scheduled_at": `2021-${this.time.M}-${this.time.D}T13:30:00+08:00`,
                                    "end_at": `2021-${this.time.M}-${this.time.D}T17:30:00+08:00`,
                                    "number": 1
                                },
                                {
                                    "api_code": "5Yxp",
                                    "scheduled_at": `2021-${this.time.M}-${this.time.D}T09:00:00+08:00`,
                                    "end_at": `2021-${this.time.M}-${this.time.D}T12:00:00+08:00`,
                                    "number": 2
                                },
                                {
                                    "api_code": "5Yxp",
                                    "scheduled_at": `2021-${this.time.M}-${this.time.D}T13:30:00+08:00`,
                                    "end_at": `2021-${this.time.M}-${this.time.D}T17:30:00+08:00`,
                                    "number": 2
                                }
                            ],
                            "field_2": "李方宁",
                            "field_4": "lifangning3@xdf.cn",
                            "field_6": "质检初中部全体教师"
                        },
                        "captchaData": null,
                        "weixinAccessToken": null, "xFieldWeixinOpenid": null, "weixinInfo": null, "prefilledParams": "", "embedded": false, "internal": false, "backgroundImage": false, "formMargin": false, "hasPreferential": false, "fillingDuration": 88.572, "forceSubmit": false
                    }
                },
                "extensions": {
                    "persistedQuery": {
                        "version": 1,
                        "sha256Hash": "efc2acc4016c37a69da13ffda3d86f5d44d71748f01fc53844ce0f1a3c03d489"
                    }
                }
            }

            const testData = {
                "operationName": "CreatePublishedFormEntry",
                "variables": {
                    "input": {
                        "formId": "uEQB9T",
                        "entryAttributes": {
                            "field_3": "wTJW",
                            "field_1": [
                                {
                                    "api_code": "pvGu",
                                    "scheduled_at": "2021-07-25T09:00:00+08:00",
                                    "end_at": "2021-07-25T12:00:00+08:00", "number": 1
                                },
                                {
                                    "api_code": "pvGu",
                                    "scheduled_at": "2021-07-25T13:30:00+08:00",
                                    "end_at": "2021-07-25T17:30:00+08:00", "number": 1
                                }
                            ],
                            "field_2": "george",
                            "field_4": "george@xdf.cn",
                            "field_6": "质检教师"
                        },
                        "captchaData": null,
                        "weixinAccessToken": null, "xFieldWeixinOpenid": null, "weixinInfo": null, "prefilledParams": "", "embedded": false, "internal": false, "backgroundImage": false, "formMargin": false, "hasPreferential": false, "fillingDuration": 88.572, "forceSubmit": false
                    }
                },
                "extensions": {
                    "persistedQuery": {
                        "version": 1,
                        "sha256Hash": "efc2acc4016c37a69da13ffda3d86f5d44d71748f01fc53844ce0f1a3c03d489"
                    }
                }
            }

            axios.post('https://jinshuju.net/graphql/f/uEQB9T', JSON.stringify(testData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.error(error);
            });
        }
    },

    created() {
        this.setEndTime();
        this.countTime();
    }
});