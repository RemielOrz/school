/**
 * Created by Remiel on 13-10-31.
 */

seajs.config({
    alias: {
        '$': 'jquery/jquery/1.7.2/jquery',
        'calendar': 'arale/calendar/0.9.0/calendar',
        'widget': 'arale/widget/1.1.1/widget',
        'tabs': 'arale/switchable/1.0.1/tabs',
        'handlebars': 'gallery/handlebars/1.0.2/handlebars',
        'templatable': 'arale/templatable/0.9.2/templatable'
    }
});
seajs.use(['widget', 'templatable', 'handlebars', '$'],function(Widget, Templatable, Handlebars, $){
    var StudentList =  Widget.extend({
        Implements: Templatable,
        templateHelpers:{
            'list':function(student_list){
                var ret = [];
                $.each(student_list, function(i,item){
                    var temp = [
                        '<div class="student-item"><input type="checkbox" id="',
                        item.sid,
                        '" /><label for="',
                        item.sid,
                        '">',
                        item.name,
                        '</label></div>'
                    ].join('');
                    ret.push(temp);
                });
                return new Handlebars.SafeString(ret.join(''));
            }
        },
        setup: function(){
        }
    });

    var studentList_0301 = new StudentList({
        model: {
            student_list: [
                {
                    sid: "std_id_03_02_001",
                    name: "remiel"
                },
                {
                    sid: "std_id_03_02_002",
                    name: "remiel2"
                },
                {
                    sid: "std_id_03_02_003",
                    name: "remiel3"
                },
                {
                    sid: "std_id_03_02_004",
                    name: "remiel4"
                }
            ]
        },
        template: $('#template-student').html(),
        parentNode: '#studentView'
    }).render();
});

seajs.use(['tabs'],function(Tabs){
    tabs = new Tabs({
        element: '.main-sidebar',
        triggers: '.ui-switchable-nav li',
        triggerType: 'click',
        panels: '.ui-switchable-content .main-content-inner',
        activeTriggerClass: 'active',
        activeIndex: 0,
        delay: 0
    });
    tabs = new Tabs({
        element: '#send-msg-container',
        triggers: '.main-content-hd a',
        triggerType: 'click',
        panels: '.main-content-bd table',
        activeTriggerClass: 'active',
        activeIndex: 1,
        delay: 0
    });
});

seajs.use(['calendar','$'],function(Calendar, $){
    var $cal = $('#send-msg-calendar'),
        $hour = $('.send-msg-hour'),
        $minute = $('.send-msg-minute');
    $(function(){
        var date = new Date();
        $cal.val(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
        $hour.val(date.getHours());
        $minute.val(date.getMinutes());
    });
    var cal = new Calendar({
        trigger: $cal
    });

});
