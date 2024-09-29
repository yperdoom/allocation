import { onMounted, ref } from 'vue';
import 'ol/ol.css';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Style, Icon } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { deliveriesStore } from '@/stores/deliveriesStore';
import { driversStore } from '@/stores/driversStore';

function addPoint(point, source){
  const pointCoordenates = new Point(fromLonLat(point));

  const pointFeature = new Feature({
    geometry: pointCoordenates
  });

  const pointStyled = pointFeature.setStyle(new Style({
    image: new Icon({
      anchor: [0.5, 1],
      src: '../assets/point.webp', // URL do ícone do pin
      scale: 0.02 // Escala para ajustar o tamanho do ícone
    }),
  }))

  source.addFeature(pointStyled)
}

function addPointsToMap(vectorSource, deliveriesPoints, driversPoints) {
  for (let deliveryPoint of deliveriesPoints) {
    addPoint(deliveryPoint, vectorSource)
  }
  for (let driverPoint of driversPoints) {
    addPoint(driverPoint, vectorSource)
  }
}

export default {
  name: 'MapView',
  setup() {
    const map = ref(null);

    onMounted(() => {
      const deliveries = deliveriesStore().deliveries;
      const drivers = driversStore().drivers;

      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({source: vectorSource});

      map.value = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer
        ],
        view: new View({
          center: fromLonLat([-52.840089, -27.299559]), // Coordenadas iniciais (pode alterar conforme necessário)
          zoom: 17,
        }),
      });

      addPointsToMap(vectorSource, deliveries, drivers);
    });

    return {
      map,
    };
  },
};