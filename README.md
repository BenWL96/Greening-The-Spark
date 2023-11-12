# Greening The Spark Scoreboard APP & CMS.


This scoreboard is a single page application which accompanies the Python based game <a href="https://www.greening-the-spark.com/">Greening The Spark</a>. Players can track their gameplay performance with various analytics and visual graphs, and receive feedback on how to improve their national grid control approach. 

<img src="https://github.com/BenWL96/Greening-The-Spark/blob/master/src/images/green_spark.png" width="200" height="200">


## This App Was Made With
<a href="https://www.django-rest-framework.org/">- Django Rest Framework API</a>

<a href="https://react.dev/">- React.js</a>

<a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">- React Three Fiber</a>

<a href="https://www.blender.org/">- Blender</a>



## Info Panel

Info panel is designed in order to enable curious users to gain a deeper insight into the energy problem. The info panel addresses how Greening The Spark models the national grid. By formulating the information from scientific references, descriptions can be made with high accuracy. The primary objective with Greening the Spark is to provoke thought and to educate, and so accurate description are important.

## Graphs

By utilising Chart.js


## Endpoints
ENDPOINT  | DESCRIPTION  | HTTP VERBS
------------- | ------------- | -------------
api/v1/sim-reports/  | lists all sim reports | GET
api/v1/sim-reports/<int:game_id>/details/  | sim report game details | GET
api/v1/sim-reports/dump/  |  GTS game passes results here | POST
api/v1/sim-reports/field-info/  |  helpful text to explain metrics | GET
api/v1/information-panel/  |  helpful text to explain goals of game | GET
api/v1/models/  |  .gltf files including spark icons and info button icon. | GET

## Django Admin Panel for CMS
- [x] Edit field info 
- [x] Edit information panel info
- [x] Edit .gltf blender models.



## 3d Models 
The Simulation Report utilises React-Three-Fiber in order to display 
models exported from blender in .glb or .gltf format.
There are 3d models installed by default, but they can be replaced 
through the django admin interface. 
