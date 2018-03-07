    function readDataFromHtml(){
        var table=$('table').eq(2);
        var rows=$('tbody>tr',table);
        //console.log(rows.length);
        //console.log(rows[0].innerHTML());

        var ret=[];
        $.each(rows,(i,e)=>{
            var tds=$(e).find('td');
            var o={};
            //console.log(tds);
            o.rate=tds.eq(0).html();
            o.ip=tds.eq(1).html();
            o.port=tds.eq(2).html();
            o.password=tds.eq(3).html();
            o.method=tds.eq(4).html();
            o.time=tds.eq(5).html();
            o.location=tds.eq(6).html();
            ret.push(o);
        });

        console.log(ret);
        //save to 2.json , and call 
        return JSON.stringify(ret);
    }