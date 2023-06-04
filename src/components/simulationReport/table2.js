<div className="table2">
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0  table2_column-title"></div>
                <div className="table2_row-header table2_stack1 table2_column-title">
                  Metric
                </div>

                <div className="table2_row-header table2_row-text table2_stack2 ms-auto table2_column-title">
                  Score
                </div>
                {/*-MAKE THIS SIMILAR CSS TO STACK 3 BUT NOT THE SAME.*/}
                <div className="table2_row-header table2_row-text2 table2_stack3 ms-auto table2_column-title">
                  Comments
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverDemand(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Demand</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {demand}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverWind(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Wind</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {wind}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverSolar(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Solar</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {solar}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverFossilFuels(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Fossil Fuels
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {fossilFuels}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverNuclear(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Nuclear</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {nuclear}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverSurplus(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Surplus</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {surplus}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {surplusComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverShortfall(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Shortfall</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {shortfall}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {shortfallComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverInitialStored(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Initial Stored
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {initialStored}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverFinalStored(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Final Stored
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {finalStored}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverStorageDiscrepancy(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>

                <div className="table2_row-header table2_stack1">
                  Storage Difference
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {storageDiscrepancy}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {storageDiscrepancyComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverEfficiencyScore(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Efficiency Score
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {efficiencyScore}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {efficiencyScoreComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverTotalCO2(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Total CO2</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {totalCO2Tonnes}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverTotalCost(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Total Cost
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {totalCostMillionPounds}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverAverageCost(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Average Cost
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {averageCostMillionPerGWH}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {averageCostComment}
                </div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverAverageCO2(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Average CO2
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {averageCO2}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {averageCO2Comment}
                </div>
              </Stack>
            </Row>
          </div>