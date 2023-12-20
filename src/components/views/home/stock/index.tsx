import React, { useEffect, useState } from 'react';
import { fetchSymbols } from '@/store/features/symbols/symbols.slice';
import { useDispatch } from 'react-redux';
import CustomModal from '@/components/common/custom-modal';
import StockHeader from '@/components/views/home/stock/stock-header';
import StockList from '@/components/views/home/stock/stock-list';
import SymbolList from '@/components/views/home/stock/symbol-list';
import { Container, Row, Col } from 'react-bootstrap';
import StockChart from '@/components/views/home/stock/stock-chart';
import styles from './Stock.module.scss';
const Stock = () => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const fetchSymbolList = () => {
    dispatch(fetchSymbols());
  };

  useEffect(() => {
    const fetchData = () => {
      fetchSymbolList();

      const interval = setInterval(
        () => {
          fetchSymbolList();
        },
        5 * 60 * 1000,
      );
      return () => {
        clearInterval(interval);
      };
    };

    fetchData();
  }, []);

  return (
    <div className={styles.stock}>
      <Container>
        <Row>
          <Col xl={12}>
            <StockHeader setShow={setShow} />
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={12}>
            <StockChart />
          </Col>
          <Col xl={7} lg={12}>
            <StockList />
          </Col>
        </Row>
      </Container>

      <CustomModal show={show} onHide={() => setShow(false)} title="Symbol List" size="lg">
        <SymbolList setShow={setShow} />
      </CustomModal>
    </div>
  );
};

export default Stock;
