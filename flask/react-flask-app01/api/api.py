# import time
import datetime
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    dt_datetime = datetime.datetime.now()

    #문자열로 반환
    format = '%Y-%m-%d %H:%M:%S'
    str_datetime = datetime.datetime.str_datetime(dt_datetime,format)
    return {'time' : str_datetime} # 웹으로 실행시 {}는 json형식으로 표현
    # return {'time': time.time()}