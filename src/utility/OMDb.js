'use strict'

import axios from 'axios'

/*
  OMDb class for handling OMDb API
 */
class OMDb {

  /*
  Constructor that accepts title to search for
   */
  constructor (title) {
    this.title = title
  }

  static randomMovie () {
    let topFilms = ['tt0111161', 'tt0068646', 'tt0071562', 'tt0468569', 'tt0050083', 'tt0108052', 'tt0167260', 'tt0110912', 'tt0060196', 'tt0137523', 'tt0120737', 'tt0109830', 'tt0080684', 'tt1375666', 'tt0167261', 'tt0073486', 'tt0099685', 'tt0133093', 'tt0047478', 'tt0114369', 'tt0317248', 'tt0076759', 'tt0102926', 'tt0038650', 'tt0118799', 'tt0245429', 'tt0120815', 'tt0114814', 'tt0110413', 'tt0120689', 'tt0816692', 'tt0054215', 'tt0120586', 'tt0021749', 'tt0034583', 'tt0064116', 'tt0253474', 'tt0027977', 'tt1675434', 'tt0407887', 'tt4633694', 'tt0088763', 'tt0103064', 'tt2582802', 'tt0047396', 'tt0110357', 'tt0082971', 'tt0172495', 'tt0482571', 'tt0078788', 'tt0209144', 'tt0078748', 'tt0095327', 'tt0095765', 'tt0032553', 'tt0043014', 'tt0405094', 'tt0057012', 'tt0050825', 'tt4154756', 'tt0081505', 'tt1853728', 'tt0910970', 'tt0119698', 'tt0051201', 'tt0364569', 'tt1345836', 'tt0090605', 'tt0169547', 'tt0087843', 'tt2380307', 'tt0082096', 'tt0033467', 'tt0112573', 'tt0052357', 'tt0053125', 'tt0105236', 'tt0086190', 'tt5311514', 'tt0022100', 'tt0086879', 'tt0180093', 'tt5074352', 'tt1187043', 'tt0986264', 'tt0062622', 'tt0056172', 'tt0338013', 'tt0114709', 'tt0066921', 'tt0211915', 'tt0036775', 'tt0045152', 'tt0075314', 'tt0361748', 'tt0093058', 'tt0040522', 'tt0056592', 'tt0012349', 'tt0119217', 'tt0070735', 'tt0435761', 'tt2106476', 'tt0208092', 'tt0086250', 'tt0059578', 'tt0071853', 'tt0053604', 'tt0017136', 'tt0119488', 'tt1832382', 'tt0097576', 'tt0042876', 'tt1049413', 'tt0042192', 'tt0372784', 'tt0055630', 'tt0053291', 'tt0363163', 'tt0105695', 'tt0095016', 'tt0040897', 'tt0113277', 'tt1255953', 'tt6966692', 'tt0044741', 'tt0081398', 'tt0057115', 'tt0118849', 'tt0457430', 'tt0071315', 'tt0476735', 'tt0096283', 'tt0041959', 'tt0347149', 'tt0089881', 'tt0055031', 'tt1305806', 'tt0015864', 'tt0050212', 'tt0268978', 'tt8108198', 'tt0120735', 'tt0112641', 'tt0050976', 'tt0047296', 'tt5027774', 'tt2096673', 'tt0080678', 'tt0993846', 'tt0434409', 'tt3170832', 'tt0031679', 'tt1291584', 'tt0083658', 'tt0046912', 'tt0050986', 'tt0477348', 'tt0469494', 'tt0017925', 'tt0117951', 'tt0167404', 'tt0031381', 'tt0084787', 'tt0116282', 'tt0091251', 'tt1205489', 'tt0266543', 'tt0077416', 'tt1130884', 'tt0118715', 'tt0015324', 'tt0266697', 'tt0061512', 'tt0046438', 'tt0032976', 'tt0978762', 'tt2119532', 'tt0892769', 'tt2267998', 'tt0107290', 'tt3011894', 'tt0018455', 'tt0169858', 'tt0120382', 'tt0079944', 'tt2278388', 'tt0107207', 'tt0758758', 'tt0092005', 'tt0025316', 'tt0091763', 'tt0079470', 'tt0074958', 'tt0353969', 'tt0060827', 'tt0116231', 'tt0052618', 'tt2024544', 'tt0395169', 'tt0405159', 'tt0112471', 'tt0060107', 'tt0046268', 'tt1979320', 'tt1392190', 'tt1392214', 'tt0053198', 'tt0019254', 'tt1028532', 'tt1895587', 'tt3315342', 'tt0245712', 'tt0264464', 'tt0093779', 'tt0087544', 'tt1201607', 'tt0405508', 'tt0064115', 'tt0075148', 'tt0072684', 'tt0198781', 'tt0032551', 'tt0097165', 'tt0033870', 'tt0088247', 'tt0083987', 'tt0246578', 'tt0113247', 'tt0046911', 'tt4016934', 'tt0118694', 'tt0107048', 'tt0032138', 'tt1454029', 'tt0073195', 'tt0050783', 'tt0381681', 'tt0087884', 'tt0092067', 'tt0036868', 'tt2015381', 'tt0325980', 'tt1954470', 'tt4430212', 'tt0101414', 'tt0070047', 'tt0094625', 'tt0111495', 'tt0120731']
    console.log(topFilms)
    var id = topFilms[Math.floor(Math.random() * topFilms.length)]
    return axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&type=movie&apikey=1a0677d8`)
  }
  /*
  Search OMDb API for movie titles
  @param {string} title - the title to search for
  @param {string} type - type to search for. Can be movie or series
  @return {object} The response containing movie(es)
   */
  static searchFor (title, type) {
    return axios.get(`http://www.omdbapi.com/?s=${title}&plot=full&type=${type}&apikey=1a0677d8`)
  }

  /*
  Get all info from OMDb APi by id
  @param {string} id - the IMDb id to query API with
  @return {object} the response containing information about the movie
   */
  static details (id) {
    return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=1a0677d8`)
  }

}

// Export Search class
export default OMDb
