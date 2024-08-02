# DIRAC:  Direct pay incentives from the Inflation Reduction Act for Colleges

Tools for calculating financial feasibility of solar panels on college campuses in the U.S. given Direct Pay Incentives from the Inflation Reduction Act.



## Executive Summary:


## Limitations:


## Data Provenance:
- College and University data comes from IPEDS, the Integrated Postsecondary Education Data System. In particular, school locations are from [Directory information, institutional characteristics, 2022](https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx?gotoReportId=7&fromIpeds=true&sid=d96aa052-e8ea-42e0-bf18-91165500f959&rtid=7).
- Solar Resource data comes from NREL's [RE Atlas](https://maps.nrel.gov/).
- Energy Community data comes from the US DoE: [Coal Closure Data 2024](https://edx.netl.doe.gov/dataset/dbed5af6-7cf5-4a1f-89bc-a4c17e46256a/resource/4006c9da-f99c-4731-97b2-633cc1578994)
- State line shape file data: [2018 US state 500k](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html).

School data was spatially joined with solar resource data to estimate the potential for solar power on each campus.  The resulting data was then spatially joined with the DoE's energy community data to inform the tax credit available to each institution.

Finally, in an effort to compare the investment to that of a typical college endowment, the estimated return was estimated according to the equation below:

TBA

Note: js and html code created with help of ChatGPT.

## in progress....
