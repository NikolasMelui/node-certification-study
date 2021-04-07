const computeErrorThreshold = (err1, err2) => {
  if (err1 === null || err2 === null) return null;
  if (Math.abs(err1) === Math.abs(err2)) return `±${Math.abs(err1)}`;
  return `+${Math.max(err1, err2)}/${Math.min(err1, err2)}`;
};

const transformOnePlanet = ({
  pl_name,
  pl_discmethod,
  pl_facility,
  pl_pnum,
  pl_orbper,
  pl_orbpererr1,
  pl_orbpererr2,
  rowupdate,
  pl_hostname,
}) => ({
  name: pl_name,
  discoveryMethod: pl_discmethod,
  facility: pl_facility,
  neighbors: pl_pnum,
  orbitsInDays: pl_orbper,
  orbitsIndaysError: computeErrorThreshold(pl_orbpererr1, pl_orbpererr2),
  lastUpdate: rowupdate,
  hostStar: pl_hostname,
});

module.exports = { transformOnePlanet };
