#pragma once
class CEventMove : public CEvent
{
private:
	CEventMgr * m_PtrEvent;

public:
	CEventMove();
	~CEventMove();

	std::string	m_Targat;


	void doExec() override;

	
};

