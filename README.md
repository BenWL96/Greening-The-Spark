# Greening The Spark Scoreboard APP.

This scoreboard is a single page application which accompanies the Python based game <a href="https://www.cornucopia.co.uk/gts/">Greening The Spark</a>, enabling players to see their performance and various analytics related to the game that they just played. 

<img src="https://github.com/BenWL96/Greening-The-Spark/blob/master/src/images/green_spark.png" width="200" height="200">


## What Exactly Is Greening The Spark?

Greening the Spark is about green electricity. And not so green electricity. It’s about how we generate, store and distribute electricity around the country and how we can control how much it costs and what impact it has on the environment.

Greening the Spark is a model of a system for electricity generation, distribution, storage and consumption – in short, a typical national grid. Originally started as a proof of concept and general purpose simulator, it is now being developed as a demonstrator for a hands-on museum exhibit. To clarify the scope of the project, here is a list of questions it is intended to answer and ones that it is not designed to answer:


## The App Was Made With
<a href="https://www.django-rest-framework.org/">- Django Rest Framework API</a>

<a href="https://react.dev/">- React.js</a>

<a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">- React Three Fiber</a>

<a href="https://www.blender.org/">- Blender</a>



## Info Panel

Info panel is designed in order to enable curious users to gain a deeper insight into the energy problem. The info panel addresses how Greening The Spark models the national grid. By formulating the information from scientific references, descriptions can be made with high accuracy. The primary objective with Greening the Spark is to provoke thought and to educate, and so accurate description are important.

## Graphs

By utilising Chart.js


## Endpoints
'api/v1/sim-reports/' -> lists all sim reports
'api/v1/sim-reports/<int:game_id>/details/' -> sim report game details
'api/v1/sim-reports/dump/' -> GTS game passes results here
'api/v1/sim-reports/field-info/' -> helpful text to explain metrics
'api/v1/information-panel/' -> helpful text to explain goals of game
'api/v1/models/' -> gltf files including spark icons and info button icon.

## 3d Models 
The Simulation Report utilises React-Three-Fiber in order to display 
models exported from blender in .glb or .gltf format.
There are 3d models installed by default, but they can be replaced 
through the django admin interface. 
