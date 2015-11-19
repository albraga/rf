var month = new Array(12);
    month[0] = 'janeiro';
    month[1] = 'fevereiro';
    month[2] = 'março';
    month[3] = 'abril';
    month[4] = 'maio';
    month[5] = 'junho';
    month[6] = 'julho';
    month[7] = 'agosto';
    month[8] = 'setembro';
    month[9] = 'outubro';
    month[10] = 'novembro';
    month[11] = 'dezembro';

var d = new Date();
var MES = new Date().getUTCMonth() +1;
var ano = new Date().getUTCFullYear();

function RF(ctr, registro, objeto, ocorrencia, portaria, arquivo) {
    this.ctr = ctr;
    this.registro = registro;
    this.objeto = objeto;
    this.ocorrencia = ocorrencia;
    this.portaria = portaria;
    this.arquivo = arquivo;
}

function mesPassadoSigla() {
    var month = new Array(12);
    month[0] = 'JAN';
    month[1] = 'FEV';
    month[2] = 'MAR';
    month[3] = 'ABR';
    month[4] = 'MAI';
    month[5] = 'JUN';
    month[6] = 'JUL';
    month[7] = 'AGO';
    month[8] = 'SET';
    month[9] = 'OUT';
    month[10] = 'NOV';
    month[11] = 'DEZ';
        if (month[d.getUTCMonth() -1] === undefined) 
            return month[11] + '_' + (ano - 1) + '.pdf';
        else
            return month[d.getUTCMonth() -1] + '_' + ano + '.pdf';

}

function mesPassadoAno() {
    if (month[d.getUTCMonth() -1] === undefined) 
        return month[11] + ' de ' + (ano - 1);
    else
        return month[d.getUTCMonth() -1] + ' de ' + ano;
}

function hoje() {
    return d.getUTCDate() + ' de ' + month[d.getUTCMonth()] + ' de ' + d.getUTCFullYear();
}

function textToArray() {
    var rfa = new Array();
    var textarea = document.getElementById("text");
    var tmp = textarea.value.split("|");
    var c = 0;
    for (var x = 0; x < textarea.rows; x++) {
        rfa.push(new RF(tmp[c], tmp[c + 1], tmp[c + 2], tmp[c + 3], tmp[c + 4], tmp[c + 5] + mesPassadoSigla()));
        c += 6;
    }
    return rfa;
}

function makePages() {
    var ANO = new Date().getFullYear().toString();
    var rfs = textToArray();
    for (var i = 0; i < rfs.length; i++) {
        var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAhAJYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKy/GfjCx8B+GrvVdRk8u2tELkAjfIeyKCQCxPAGeteDXn7c94LuX7PoFsYN58syXDB9ueM4GM464r8/wCMfFDhvherChnOI5JzV1FRlJ22u1FOyvtffW2x6+W5FjcdFzw0Lpdbpfmcr/wV/wDgT8ZfiV+ztN4k+Bfj/wAW+FPHHg+KS7Gk6Ve+TD4it+DJEVx/r1VS0ZB5OUI+YFfwN0r/AIKvftV63rkOmWvxm+JE1/cSiBIBqLby+cbcHpz1z0r+i3wT+1p4h+IHiW20rTfDdjJc3LAZNw+yJe7sQpwo6k4/M8V+Mv8AwUhsfhLN/wAFCvGPi/4TWJiinkMepXCEfYbnUsyLd3FmF6Ry5GXB+Z/MZCFcZ/U/BPjjJuNY1aeVp1KVNq83TcUm9XG8kuZ9dL2vro0fk3i5QxHDeHjjasuWpPRQUt30dk9F3f67/Y3/AATJ/wCCmvjLwRrWjeGvjR4pn8QWOqWsFrLq15ICdLugOZHkI3NGzHazMcLgN8qgiv1Qr+dTwt4lj1m0AaVWlB2qSCvmj5sEZAB+4/T+7nC8qP3E/YB8J+OPBf7LPhux8fXb3GsCLzbeKaN1urG0ZVMVvPv+YyoCQQQNo2pjKEn9J8TOGsDg40sfg7Q5vdce9l8SS/8AJu7s927/AJv4Hcc5tmdTEZTmalU9n76qP7Kk/gk272v8G9kmtkrez0V+cH7ZX/BwzoPwq+NN98M/gr8Ptc+NnjTS5Xtr19O8z7FDOrbGiiEUcktwytwxVQmcAO2Tjc/YF/4LN+Pf2k/2mLL4SfEj9njxt8PfE1/azX63iRzG1trZM4mnjuI4njhLKYxKrOGdkUDnI/OHkmMVH28oWVr6tJ272vc/dFnmCdb2EZ3d7aJtX7XtY/QOisbxp8RfD/w305LzxFrujaBaSNtWfUb2O1jY+gaRgCeR+dWvDPirS/Guiw6lo2pWGradcjMV1ZXCTwyj1V0JU/ga8zldua2h6nPG/LfUv0VW1PWLTRLcS3t1bWkTNsDzSrGpbBOMk9cA/lRe6xaabZC5ubq2t7dsYlklVEOenJOOaVmO6LNFQJqltLp32xbiBrQIZPPEgMe0dW3dMe9Z/hj4g6B42kmTRdc0jV2twDKLK8juDEDnBbYTjOD19KOV2vYXMr2vua9FMkuI4WVXdFLdAWAJ5A/mQPxFRatq9poGmzXl9dW9laW67pZ55FjjjHqzEgAfWiw20ixRWV4T8c6J49sZbnQtY0rWraGVoZJbC7juUjkXgoWQkBh3HUVJ4o8XaT4H0eTUda1TTtH0+H/WXV7cpbwp9XcgDp60+V35bai5425r6GjRVPQfEen+KtMS90u/s9Ss5CQk9rOs0TEHBAZSQcHiik01oxppq6PjL9tz4969P8av+EcntpLPQtKjX7NCpV3vbhpURpHXcByrwpG25dhuckMu8x8T/adt/Zv2z7RB9j8rzvP8weV5eM793TbjnPTFfWX7Wv7Nlr8d/CSXEMSHWdKKyxZUE3cSklrfnI+cFl6ch3U4Dkj8yvjn4l1vwlajwfdNNEkYJu1lgVWnIdQGJK5Jd4mmZgxO6dkYkoa/zy8ZOBM2fFk54+fN7aTlGpbR010SW0qatFrRbPRSR+5cI4zDYnAQpYdcrhpJeff57/gfSf7Rvgr4w+Lv2MNN0/8AZv0Ww8S6l8TYj/bviRtZt9PGlWIwjWkAlYMJmZnDuFygjlH3zHs+C9G/4Ih/tPaXDl/h/pzPj5lj8R6fhiN3GTLkjI4OAfnXPcL9Zf8ABM39sOT4FfEOPwfrMsQ8I+KLrJkYENp94yqiSggEsr7UjYHAHytkBWDfqBHIs0aujBlYZBByCPWv7k8EuMsJl/DtHL8ipQp+wSUo6uSbv7zd1fn1le2rut0z8L8TPD+nj8xm81nOUZ6xs0lbstHZr17Pax+aX/BMH/gjp4l+E3xRbxl8XrOwhTRwG0fRYrxLrfc71b7RMUJTauxdqhjuJBbAXDfWH/BU/wCK2t/BH/gnb8X/ABP4beSHW9O8OXC2s8YO+1aXEJmX0aNZC4PQFRnivfq5/wCLPww0f41/C/xF4P8AEFubvQ/FGm3GlX8QIBeCaNo3wcHDYY4PY4NfomYZ9iMwxkMVjXfltotkk9kvM+cyXhXBZPgJ4HLY8vNdtvVuTVrt+Wlux8Of8G3f7MnhX4S/8E5vDXjjT9OtW8VfEaW7vdV1NoF+0tHFdy28VsH+95SLCGC5xvd2xk19vfGb4mWnwW+EHinxhfRmaz8K6RdavNEG2mVIIWlKA4OCQuBweT0Nfjp8E/jr8e/+Dd7Xtc+HHjP4c6n8Uvghd6rJf6Lr+mB4xapIwQusgR0jdx5Za2lK4k3bHIYs30j+zL/wV0uv+CqnxY1T4UW/wG8dad8LfFmgX2lax4kmYt/Z0skJBEpVRHGhRtoxIZN7oQoANdeZZZXq4ieN+Ok3zcya+Htve6WljPLc0oUcNDBfBWS5eVp/F32tZvW58w/8E+f+CZ+o/wDBcO68R/tE/tDeNfEc+mavq09loei6RdrH5UcTZaMNIsghtkLeWkaAOxVmZsnL6fiD4Oa5/wAG9n/BRb4VHwl4113Wvgb8YdQ/srUtI1ScM9sBJHFI0gULGzwm5SaOVFVsB0bhiXzv2Yf2vPjD/wAG+Wq+IPg98Vvhjr3jn4ayanJeeGvEGjp5UTb9xZonKNHIJdqMYXdZITvJ3AgVv+CD8WP+C/P7ePw38b634D1f4b/Aj4RXa6lbvd+ZnUZRLDM0SyMFEs0xiiUmNdsUakltxXd7dSWI9rOdZr6pyu21rW91Jb817fM8OnHD+yhCin9bUlfR3vf3m3ty2v8A1cyLL9k5v+C1f/BXT9oHw/8AFPxx4usvC/wh1CTT9G0zTJowkcMdy9uqJvVkjB8su5CFmLnLd6g+Mf7Llt/wUa/4LPaz+zTrPiXxD4Q+EPwZ8KQW2haPosqhIILe1sgqoJAyK7NcAtIyOxWJV9CvtX/BHCzmh/4LH/tqSvFIkU2u3XluykLJjVLgHB74PpWf+yVpN0v/AAdCfHa6NtcC1PhiQCbyz5Z/caSPvdOvFYzxNSnVqRg7KnSTj5NqN2vM1p4anUpUpzV3UqtS31ScrJ+R83f8FAviZ4OuP2sdD/Y9u/iRc/BT9mv4N6bFY6nd2yXF5Lr12YY7mVpo4Q3myNNLgB1KI4lkIJIUcD+0t4X/AGX/ANlDQbX4j/si/tLeK7D4k+GpIpY9Ivbe6P8AaqAhX8uVrSKNWClnaOXfHIAygDIB+nP+Cvn7A+s/s8ft9n9pXTfhDYfG/wCGPiOGM+L/AA1LBJM9jOsawyTBUDMisiJIswVlSTzA6hSN3Ofs4ftJ/sq/tT/tK+D/AAN4V/YavZdM166W11PU208Sy6QHQ4mMMYZTCrgb3aRNsYZ8ErtPbh68Xh6dalzSio3kk4Wb+1zKWrb/AOGOLE4eSxFSjV5YycrRup3S+zyOOiS/4cqft8/tV3v7YfxD/wCCdvxFWOTT7zxnqKNqNrbF0iN1HqunwXCouSTH50cu0Ek7SOtdH8QfAPjb/gvl/wAFN/ih8P8AUvG+qeFPgR8Eb46bcWGmSfPeypM8IcIw2PNNLbzuJZFYRIigKScttf8ABaP4I6F8Ff2yf2IPC/gnw9BonhjQfEjfZ7GxhYW9kr6tp8rYHO0F2dufU1F+0PpvxY/4Iff8FG/iF8avCXgK9+IPwS+Mdyb/AF2O03F9OuJJWmlVnQMYHSaSVo2dfKdJtgIYEry0ZwdGm8LZTcZ+zvbT39tdL22OytCca1RYq7gpQ9pa+vubu2vLfc5P9vb/AIJd6x/wRI0TS/2hf2d/iJ4rttO8Paha2+v6PrF1HIbmOSQRpkxpGk0LOwRopEJHmb1bjjzP/gp/8cPDf7TH/BQr4V+KPj1feO9N/Z08WeC9P8QeHYdFj3NClzYpJMqg/L5guyUlZQ0gVYxjG0j0r9qf9uP4u/8ABfWLSPgj8HfhXr/hHwLd6lbXXijX9YXfFAqMWXz5AojiiQjzQis0srRqFHBVvoL/AIKA/tj6V/wTpPgX4N+Jf2Z774pfAnw74btLBdZv9NjurWa6RBEixb45IA6xq25X2OWf5cKMvVGriISpxxEeavaS0cVJRdra7c19vK5FelhqkaksPJxw6cXqpOLkr3035bb+dvI7D/ghj+zn+zp8Lrfx94k+AHxT8QfEHT9bkt4riw1SdoptBTZuCSW/lxZd2BxM0Q+VNik7XLFfJ3/BGn4GeJ/j3+3j8W/ix8JPCuu/Aj4PatpJ0/TIJklkgknMtqTDHuwshzDPKwQkQ+aEHBFFfP51horFvnq3dl8WrWmz5Va68j6LI8VJ4SPs6Ol38Oz13XM72fmfttXDfE3/AJD0P/Xuv/oTUUV4dH4j3a/wHRf8yH/24f8AtOteiiokXEKKKKksKqeH/wDkA2P/AF7x/wDoIoop9CeoeIP+QDff9e8n/oJq3RRR0H1Kmm/8fuof9fA/9FR0Q/8AIeuf+veL/wBCloopiLdVNN/4/dQ/6+B/6KjoopIbKfi3/mGf9f8AF/Wteiim9kTHdlTw/wD8gGx/694//QRR4g/5AN9/17yf+gmiij7QL4S3RRRUln//2Q==';
        var doc = new jsPDF();
        doc.addImage(imgData, 'jpeg', 20, 2, 41.5, 8.9);
        doc.rect(19.5, 1.8, 171, 10);
        doc.setFontType('bold');
        doc.setFontSize(11);
        doc.text(70, 7, 'REGISTRO DE FISCALIZAÇÃO DE GARANTIA');
        doc.text(20, 20, 'RF. ' + rfs[i].registro + '/' + ANO + ' - SERT-PB/GMAT1/DPROR');
        doc.setFontType('normal');
        doc.text(20, 27, 'Ao Senhor Gerente Corporativo da GECR/DPROR/VICOR/AC');
        doc.text(20, 35, 'Assunto: Fiscalização Mensal de Termos de Garantia Técnica.');
        doc.text(20, 40, 'Ref.: Contrato nº ' + rfs[i].ctr.trim());
        doc.text(20, 50, 'Objeto: ' + rfs[i].objeto);
        doc.text(20, 55, 'DR: PB');
        doc.text(107, 65, 'João Pessoa - PB, ' + hoje());
        doc.text(20, 80, '         Informamos  a  esse  Gestor  Operacional,  para  análise  e  providências  cabíveis,  as'); 
        doc.text(20, 85, 'ocorrências constatadas no acompanhamento mensal da garantia do Contrato em referência,'); 
        doc.text(20, 90, 'ocorridas no mês de ' + mesPassadoAno() +', conforme segue:');
        doc.setFontType('bold');
        doc.text(20, 105, '1. Especificações da ocorrência:');
        doc.setFontType('normal'); 
        doc.text(23, 110, '1.1.  (  ) não houve encerramento/solução de chamado ou chamado não executado;'); 
        doc.text(23, 115, '1.2.  (  ) todos os chamados foram encerrados/solucionados nos prazos;'); 
        doc.text(23, 120, '1.3.  (  ) nem todos os chamados foram encerrados/solucionados nos prazos;'); 
        doc.text(23, 125, '1.4.  (  ) houve chamado não executado (a Contratada não prestou atendimento);');  
        doc.text(23, 130, '1.5.  (  ) houve irregularidade de preenchimento de RAT;'); 
        doc.text(23, 135, '1.6.  (  ) não houve entrega de RAT na unidade atendida; ');
        doc.text(23, 140, '1.7.  (  ) não houve disponibilização de RAT no Web site da Contratada;');
        doc.text(23, 145, '1.8.  (  ) não houve entrega do Relatório de substituição de equipamento;');
        doc.text(23, 150, '1.9.  (  ) não houve entrega do Relatório de Chamados Fechados;');
        doc.text(23, 155, '1.10. (  ) outras ocorrências.');
        
        doc.text(20, 165, 'Obs.: eventuais chamados não encerrados/solucionados sem atraso (virada do mês)');
        doc.text(20, 170, 'ou com atraso inferior a 200 horas úteis serão relacionados no RF do período seguinte.'); 
        
        doc.setFontType('bold');
        doc.text(20, 180, '2. Descrição das Ocorrências:');
        doc.setFontType('normal');
        doc.text(23, 190, (rfs[i].ocorrencia !== null ? rfs[i].ocorrencia.toString():''));
        doc.setFontType('bold');
        doc.text(20, 200, '3. Documentos Anexos:');
        doc.setFontType('normal'); 
        doc.text(23, 205, '3.1  (  ) Planilha de Acompanhamento de Chamado – PAC e RATs correspondentes;');
        doc.text(23, 210, '3.2  (  ) Documentos Adicionais (e-mail, imagem de tela impressa etc).');

        doc.text(90, 225, 'Atenciosamente,');
        doc.text(20, 255, 'Emitente: _____________________________');
        doc.text(20, 260, 'Fiscal Regional - PRT / CESEP - ' + rfs[i].portaria);
        doc.text(20, 265, 'Nome: Alexandre Braga Carvalho');
        doc.text(20, 270, 'Matrícula: 8.203.819 - 8');
        
        doc.text(110, 255, 'De acordo: ____________________________');
        doc.text(110, 260, 'Assinatura do Gerente/Chefia');
        doc.text(110, 265, 'Nome completo:');
        doc.text(110, 270, 'Matrícula:');
        doc.text(20, 285, 'ABC/abc');
        doc.save(rfs[i].arquivo);
    }
}