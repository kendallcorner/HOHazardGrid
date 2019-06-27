var sourceDataObject = [
          {
            Node: 'Best Rock Performance',
            Deviation: null,
            Cause: null,
            Consequences: null,
            __children: [
              {
                Cause: 'Don\'t Wanna Fight',
                Deviation: 'Alabama Shakes',
                Consequences: 'ATO Records'
              }, {
                Cause: 'What Kind Of Man',
                Deviation: 'Florence & The Machine',
                Consequences: 'Republic'
              }, {
                Cause: 'Something From Nothing',
                Deviation: 'Foo Fighters',
                Consequences: 'RCA Records'
              }, {
                Cause: 'Ex\'s & Oh\'s',
                Deviation: 'Elle King',
                Consequences: 'RCA Records'
              }, {
                Cause: 'Moaning Lisa Smile',
                Deviation: 'Wolf Alice',
                Consequences: 'RCA Records/Dirty Hit'
              }

            ]
          }, {
            Node: 'Best Metal Performance',
            __children: [
              {
                Cause: 'Cirice',
                Deviation: 'Ghost',
                Consequences: 'Loma Vista Recordings'
              }, {
                Cause: 'Identity',
                Deviation: 'August Burns Red',
                Consequences: 'Fearless Records'
              }, {
                Cause: '512',
                Deviation: 'Lamb Of God',
                Consequences: 'Epic Records'
              }, {
                Cause: 'Thank You',
                Deviation: 'Sevendust',
                Consequences: '7Bros Records'
              }, {
                Cause: 'Custer',
                Deviation: 'Slipknot',
                Consequences: 'Roadrunner Records'
              },]
          }, {
            Node: 'Best Rock Song',
            __children: [
              {
                Cause: 'Don\'t Wanna Fight',
                Deviation: 'Alabama Shakes',
                Consequences: 'ATO Records',
              }, {
                Cause: 'Ex\'s & Oh\'s',
                Deviation: 'Elle King',
                Consequences: 'RCA Records',
              }, {
                Cause: 'Hold Back The River',
                Deviation: 'James Bay',
                Consequences: 'Republic',
              }, {
                Cause: 'Lydia',
                Deviation: 'Highly Suspect',
                Consequences: '300 Entertainment',
              }, {
                Cause: 'What Kind Of Man',
                Deviation: 'Florence & The Machine',
                Consequences: 'Republic',
              }
            ]
          }, {
            Node: 'Best Rock Album',
            __children: [
              {
                Cause: 'Drones',
                Deviation: 'Muse',
                Consequences: 'Warner Bros. Records',
              }, {
                Cause: 'Chaos And The Calm',
                Deviation: 'James Bay',
                Consequences: 'Republic',
              }, {
                Cause: 'Kintsugi',
                Deviation: 'Death Cab For Cutie',
                Consequences: 'Atlantic',
              }, {
                Cause: 'Mister Asylum',
                Deviation: 'Highly Suspect',
                Consequences: '300 Entertainment',
              }, {
                Cause: '.5: The Gray Chapter',
                Deviation: 'Slipknot',
                Consequences: 'Roadrunner Records',
              }
            ]
          }],

container = document.getElementById('example1')

var hotSettings = {
  data: inputdata,
  rowHeaders: true,
  colHeaders: ['Node', 'Deviation', 'Cause', 'Consequences'],
  nestedRows: true,
  contextMenu: true,
  stretchH: 'all',
  width: 880,
  autoWrapRow: true,
  height: 487,
  manualRowResize: true,
  manualColumnResize: true,
  manualRowMove: true,
  manualColumnMove: true,
  dropdownMenu: true
};

var hot = new Handsontable(container, hotSettings );
