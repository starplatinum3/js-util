import requests
IMAGE_URL="https://media-public.canva.cn/J2sNs/MAEvTtJ2sNs/2/s.png"

# D:\proj\js\js-util>python --version
# Python 3.7.4
# python -m pip install requests
# 失败
def request_download():
    
    r = requests.get(IMAGE_URL)
    with open('./image/img2.png', 'wb') as f:
        f.write(r.content)
# pip in BytesIO
# python -m pip install BytesIO
# python -m pip install PIL
# import BytesIO
# import StringIO
from io import StringIO
from io import BytesIO
from PIL import Image
# 因此,在Python3中,使用io.StringIO,而在Python2中使用io.BytesIO：

# 
# from uuid import uuid
# uuid pip 
import uuid

#  python -m  pip install pillow

# https://blog.csdn.net/weixin_39552179/article/details/110553680
# ————————————————
# 版权声明：本文为CSDN博主「ctrigger」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
# 原文链接：https://blog.csdn.net/ctrigger/article/details/107085692
#图片URL
# url='http://www.zalou.cn/favicon.ico'
url=IMAGE_URL
req=requests.get(url)
#  Traceback (most recent call last):
#   File "d:\proj\js\js-util\download_img.py", line 40, in <module>
#     image=Image.open(BytesIO(req.content))
#   File "D:\software\anaconda\envs\py374\lib\site-packages\PIL\Image.py", line 3148, in open
#     "cannot identify image file %r" % (filename if filename else fp)
# PIL.UnidentifiedImageError: cannot identify image file <_io.BytesIO object at 0x000001FACB3F72E8>
#使用BytesIO接口
image=Image.open(BytesIO(req.content))
# image=Image.open(StringIO(req.content))
fileName=str(uuid.uuid4())+'.'+image.format.lower()
with open('image/'+fileName,'wb') as f:
    f.write(req.content)

# request_download()